<script>
import AppHeader from "./components/AppHeader.vue";
import AppMainMovies from "./components/AppMainMovies.vue";
import AppMainSeries from "./components/AppMainSeries.vue";
import axios from "axios";
import {store} from "./store";

export default {
	data() {
		return {
			store,
			inputSearch: "",
		};
	},

	components: {
		AppHeader,
		AppMainMovies,
		AppMainSeries,
	},

	methods: {
		async searchMovieTitle(value) {
			this.inputSearch = value;
			const endpoint =
				"https://api.themoviedb.org/3/search/movie?api_key=d3e8524b6cb601e8d53a4fb415a08a48";
			const query = this.inputSearch.split(" ").join("+");
			const language = "it-IT";
			const moviesUrl = `${endpoint}&query=${query}&language=${language}`;
			const response = await axios.get(moviesUrl);
			this.store.movies = response.data.results;

			//ricera nomi attori
			this.store.movies.forEach(async (movie) => {
				const movieId = movie.id;
				const creditsEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d3e8524b6cb601e8d53a4fb415a08a48&language=it-IT`;
				const castResponse = await axios.get(creditsEndpoint);
				const cast = castResponse.data.cast.slice(0, 5);
				movie.cast = cast.map((member) => member.name);
			});
		},

		async searchSeriesTitle(value) {
			this.inputSearch = value;
			const endpoint =
				"https://api.themoviedb.org/3/search/tv?api_key=d3e8524b6cb601e8d53a4fb415a08a48";
			const query = this.inputSearch.split(" ").join("+");
			const language = "it-IT";
			const seriesUrl = `${endpoint}&query=${query}&language=${language}`;
			const response = await axios.get(seriesUrl);
			this.store.series = response.data.results;

			//ricera nomi attori
			this.store.series.forEach(async (item) => {
				const seriesId = item.id;
				const creditsEndpoint = `https://api.themoviedb.org/3/tv/${seriesId}/credits?api_key=d3e8524b6cb601e8d53a4fb415a08a48&language=it-IT`;
				const castResponse = await axios.get(creditsEndpoint);
				const cast = castResponse.data.cast.slice(0, 5);
				item.cast = cast.map((member) => member.name);
			});
		},
	},

	mounted() {
		{
			axios
				.get("https://api.themoviedb.org/3/genre/movie/list", {
					params: {
						api_key: "d3e8524b6cb601e8d53a4fb415a08a48",
						language: "it-IT",
					},
				})
				.then((response) => (this.store.genres = response.data.genres));
		}
	},
};
</script>

<template>
	<AppHeader @title="searchMovieTitle" @series="searchSeriesTitle" />
	<AppMainMovies />
	<AppMainSeries />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>

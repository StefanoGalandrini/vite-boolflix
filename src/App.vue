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
		searchMovieTitle(value) {
			this.inputSearch = value;
			const endpoint =
				"https://api.themoviedb.org/3/search/movie?api_key=d3e8524b6cb601e8d53a4fb415a08a48";
			const query = this.inputSearch.split(" ").join("+");
			const language = "it-IT";
			const moviesUrl = `${endpoint}&query=${query}&language=${language}`;
			axios
				.get(moviesUrl)
				.then((response) => (this.store.movies = response.data.results));
			this.loadPosterImage(this.store.movies);
		},

		searchSeriesTitle(value) {
			this.inputSearch = value;
			const endpoint =
				"https://api.themoviedb.org/3/search/tv?api_key=d3e8524b6cb601e8d53a4fb415a08a48";
			const query = this.inputSearch.split(" ").join("+");
			const language = "it-IT";
			const seriesUrl = `${endpoint}&query=${query}&language=${language}`;
			axios
				.get(seriesUrl)
				.then((response) => (this.store.series = response.data.results));
			this.loadPosterImage(this.store.series);
		},

		loadPosterImage(value) {
			console.log("VALUE:", value);
			const endpoint = store.baseUrl;
			const posterWidth = "w350";
			const language = "it-IT";
			value.forEach((element) => {
				console.log("sono qui", element);
				if (element.posterPath) {
					const query = element.posterPath;
					const posterUrl = `${endpoint}${posterWidth}&query=${query}&language=${language}`;
					axios
						.get(posterUrl)
						.then((response) => this.store.posters.push(response.data.results));
					console.log(posterUrl);
				}
			});
		},
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

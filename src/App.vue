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
			console.log(moviesUrl);
			axios.get(moviesUrl).then((response) => {
				this.store.movies = response;
				console.log(this.store.movies);
			});
		},
	},
};
</script>

<template>
	<AppHeader @title="searchMovieTitle" />{{ this.inputSearch }}

	<AppMainMovies />
	<AppMainSeries />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>

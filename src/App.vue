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
		};
	},

	components: {
		AppHeader,
		AppMainMovies,
		AppMainSeries,
	},
};
</script>

<template>
	<AppHeader />

	<AppMainMovies />
	<AppMainSeries />
</template>

<style lang="scss"></style>

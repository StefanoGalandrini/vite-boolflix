<script>
import AppCard from "./AppCard.vue";
import {store} from "../store";

export default {
	data() {
		return {
			store,
			propsObj: {},
		};
	},

	components: {
		AppCard,
	},

	methods: {
		isEnglish(code) {
			let isoLang = "";
			code === "en" ? (isoLang = "us") : (isoLang = code);
			return isoLang;
		},

		getLanguage(code) {
			const lang = new Intl.DisplayNames(["it"], {type: "language"});
			const languageName = lang.of(code);
			return languageName.charAt(0).toUpperCase() + languageName.slice(1);
		},
	},
};
</script>

<template>
	<div class="container">
		<h1>MOVIES</h1>
		<div class="content">
			<div v-for="movie in store.movies" :key="movie.id" class="cards">
				<AppCard
					:title="movie.title"
					:originalTitle="movie.original_title"
					:lang="[
						isEnglish(movie.original_language),
						getLanguage(movie.original_language),
					]"
					:rating="movie.vote_average"
					:poster="store.baseUrl + movie.poster_path" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

h1 {
	font-weight: 800;
	color: black;
	text-align: center;
	padding-top: 1.5rem;
}
.container {
	background-color: $bgGray;

	.content {
		width: 70vw;
		margin-inline: auto;
		padding: 2rem 0;
		color: white;
		font-size: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		.cards {
			width: calc((100% - 2rem) / 3);
		}
	}
}
</style>

<script>
import AppCard from "./AppCard.vue";
import {store} from "../store";

export default {
	data() {
		return {
			store,
		};
	},

	components: {
		AppCard,
	},

	methods: {
		getLanguage(code) {
			const lang = new Intl.DisplayNames(["it"], {type: "language"});
			const languageName = lang.of(code);
			return languageName.charAt(0).toUpperCase() + languageName.slice(1);
		},
	},

	// 	MovieCardValues() {
	// 		const title = store.movies.title;
	// 		console.log(title);
	// 	},
	// },
};
</script>

<template>
	<div class="container">
		<div class="content">
			<div v-for="movie in store.movies" :key="movie.id" class="cards">
				<AppCard
					:title="movie.title"
					:originalTitle="movie.original_title"
					:lang="[
						movie.original_language,
						getLanguage(movie.original_language),
					]"
					:rating="movie.vote_average" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
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
		// grid-auto-flow: column;
		gap: 1rem;

		.cards {
			width: calc((100% - 5rem) / 6);
		}
	}
}
</style>

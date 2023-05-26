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
		isEnglish(code, country) {
			let isoLang = "";
			code === "en" && country === "US" ? (isoLang = "us") : (isoLang = code);
			return isoLang;
		},

		getLanguage(code) {
			const lang = new Intl.DisplayNames(["it"], {type: "language"});
			const languageName = lang.of(code);
			return languageName.charAt(0).toUpperCase() + languageName.slice(1);
		},

		getGenres(genreIds) {
			return genreIds.map((genreId) => {
				const genre = store.genres.find((genre) => genre.id === genreId);
				return genre ? genre.name : "";
			});
		},
	},
};
</script>

<template>
	<div class="container">
		<h1>TV SERIES</h1>
		<div class="content">
			<div v-for="tvSeries in store.series" :key="tvSeries.id" class="cards">
				<AppCard
					:dataProps="{
						title: tvSeries.name,
						originalTitle: tvSeries.original_name,
						lang: [
							isEnglish(tvSeries.original_language, tvSeries.origin_country[0]),
							getLanguage(tvSeries.original_language),
						],
						rating: tvSeries.vote_average,
						poster: store.baseUrl + tvSeries.poster_path,
						overview: tvSeries.overview,
						genres: getGenres(tvSeries.genre_ids),
						actors: tvSeries.cast,
					}" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.container {
	background-color: $bgGray;

	h1 {
		font-weight: 800;
		color: black;
		text-align: center;
		padding-top: 1.5rem;
	}
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
			width: calc((100% - 3rem) / 3);
		}
	}
}
</style>

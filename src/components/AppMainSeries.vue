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
	},
};
</script>

<template>
	<div class="container">
		<h1>TV SERIES</h1>
		<div class="content">
			<div v-for="series in store.series" :key="series.id" class="cards">
				<AppCard
					:title="series.name"
					:originalTitle="series.original_name"
					:lang="[
						isEnglish(series.original_language, series.origin_country[0]),
						getLanguage(series.original_language),
					]"
					:rating="series.vote_average"
					:poster="store.baseUrl + series.poster_path"
					:overview="series.overview" />
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

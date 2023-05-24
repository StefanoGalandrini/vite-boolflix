<script>
import AppRating from "./AppRating.vue";
/* import flags library */
import CountryFlag from "vue-country-flag-next";

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		originalTitle: {
			type: String,
			required: true,
		},
		lang: {
			type: Array,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
	},

	components: {
		CountryFlag,
		AppRating,
	},
};
</script>

<template>
	<div class="card">
		<div class="element">
			<p class="key">Titolo:</p>
			<p class="value">{{ title }}</p>
		</div>
		<div class="element">
			<p class="key">Titolo Originale:</p>
			<p class="value">{{ originalTitle }}</p>
		</div>
		<div class="element">
			<p class="key">Lingua:</p>
			<country-flag :country="lang[0]" size="big" class="flag" />
			<span class="value">{{ lang[1] }}</span>
		</div>
		<div class="element">
			<p class="key">Voto:</p>
			<p class="value">{{ rating }}</p>
		</div>

		<AppRating :value="rating" />
	</div>
</template>

<style lang="scss" scoped>
.card {
	border: 1px solid black;
	padding: 0.5rem;
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #222222;
	box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.5);
	.element {
		margin-bottom: 1rem;
		.key {
			font-size: 0.9rem;
			color: lightblue;
		}

		.flag {
			margin-right: 1ch;
			margin-top: 1ch;
			box-shadow: 0 0 1px 2px grey;
		}

		.value {
			font-size: 1rem;
			font-weight: bold;
		}
	}
}
</style>

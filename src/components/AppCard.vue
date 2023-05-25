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
		poster: {
			type: String,
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
		<img :src="poster" alt="POSTER" />
		<div class="element">
			<p class="key">Titolo:</p>
			<p class="value">{{ title }}</p>
		</div>
		<div class="element">
			<p class="key">Titolo Originale:</p>
			<p class="value">{{ originalTitle }}</p>
		</div>
		<div class="element">
			<div>
				<p class="key">Lingua:</p>
				<p class="value">{{ lang[1] }}</p>
			</div>
			<country-flag :country="lang[0]" size="big" class="flag" />
		</div>
		<div class="element">
			<p class="key">Voto:</p>
			<p class="value">{{ rating }}</p>
			<AppRating class="rating" :value="rating" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	border: 1px solid black;
	padding: 0.5rem;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #222222;
	box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.5);

	img {
		aspect-ratio: 2 / 3;
		object-fit: cover;
	}
	.element {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 1rem 1rem;
		.key {
			font-size: 0.9rem;
			color: lightblue;
			margin-top: 0.5rem;
		}

		.flag {
			text-align: right;
			margin-left: 2rem;
			margin-top: 1ch;
			box-shadow: 0 0 1px 2px grey;
		}

		.value {
			font-size: 1rem;
			font-weight: bold;
			margin-top: 0.5rem;
		}

		.rating {
			margin-left: 1rem;
		}
	}
}
</style>

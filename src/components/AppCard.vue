<script>
import AppRating from "./AppRating.vue";
/* import flags library */
import CountryFlag from "vue-country-flag-next";

export default {
	data() {
		return {};
	},

	props: {
		dataProps: {
			type: Object,
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
	<div class="scene">
		<div class="card">
			<div class="card__face card__face--front">
				<img
					v-if="dataProps.poster.endsWith('null')"
					src="../assets/img/not-found.webp"
					alt="POSTER" />
				<img v-else :src="dataProps.poster" alt="POSTER" />
			</div>
			<div class="card__face card__face--back">
				<ul>
					<li class="element">
						<p class="key">Titolo:</p>
						<p class="value">{{ dataProps.title }}</p>
					</li>
					<li class="element">
						<p class="key">Titolo Originale:</p>
						<p class="value">{{ dataProps.originalTitle }}</p>
					</li>
					<li class="element">
						<div>
							<p class="key">Lingua:</p>
							<p class="value">{{ dataProps.lang[1] }}</p>
						</div>
						<country-flag
							:country="dataProps.lang[0]"
							size="big"
							class="flag" />
					</li>
					<li class="over">
						<p class="key">Riassunto:</p>
						<p class="value">{{ dataProps.overview }}</p>
					</li>
					<li class="element">
						<p class="key">Voto:</p>
						<p class="value">{{ dataProps.rating }}</p>
						<AppRating class="rating" :value="dataProps.rating" />
					</li>
					<li class="element">
						<p class="key">Generi:</p>
						<span class="value">{{
							dataProps.genres.filter((genre) => genre).join(", ")
						}}</span>
					</li>
					<li class="element">
						<p class="key">Protagonisti principali:</p>
						<!-- <ul>
							<li v-for="actor in actors" :key="actor">{{ actor }}</li>
						</ul> -->

						<!-- <span class="value">{{
							dataProps.actors.filter((name) => name).join(", ")
						}}</span> -->
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.scene {
	perspective: 1000rem;

	.card {
		position: relative;
		width: 100%;
		aspect-ratio: 2 / 3;
		background: #222222;
		border: 1px solid black;
		box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.5);
		transition: 1s ease-in-out;
		transform-style: preserve-3d;
		backface-visibility: hidden;

		.card__face {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #222222;
			box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
			backface-visibility: hidden;
			transition: 1s ease-in-out;

			&--back {
				transform: rotateY(0.5turn);
			}

			img {
				width: 100%;
				aspect-ratio: 2 / 3;
				object-fit: cover;
			}
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

		.over {
			display: block;
			margin: 1rem 1rem;
			max-height: 20ch;
			overflow: auto;

			.key {
				font-size: 0.9rem;
				color: lightblue;
				margin-top: 0.5rem;
			}

			.value {
				font-size: 1rem;
				font-weight: 400;
				color: lightgray;
				margin-top: 0.5rem;
			}
		}

		&:hover {
			transform: rotateY(0.5turn);
		}
	}
}
</style>

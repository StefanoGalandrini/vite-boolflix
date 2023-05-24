<script>
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
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
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
			<p class="value">{{ lang }}</p>
		</div>
		<div class="element">
			<p class="key">Voto:</p>
			<p class="value">{{ rating }}</p>
		</div>
	</div>
	<!-- <font-awesome-icon :icon="['fas', 'star']" />
	<font-awesome-icon :icon="['far', 'star']" /> -->
</template>

<style lang="scss" scoped>
.card {
	border: 1px solid black;
	padding: 0.5rem;
	height: 30vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #222222;
	box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.5);
	.element {
		margin-bottom: 1rem;
		.key {
			color: lightblue;
		}

		.value {
			font-size: 1.2rem;
			font-weight: bold;
		}
	}
}
</style>

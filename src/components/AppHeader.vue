<script>
import {store} from "../store";

export default {
	data() {
		return {
			store,
			inputSearch: "",
		};
	},

	methods: {
		emitInputSearch(event) {
			event.preventDefault();
			this.$emit("title", this.inputSearch);
		},
	},
};
</script>

<template>
	<header>
		<div class="container">
			<img src="../assets/img/logo.webp" alt="" />

			<form action="" @submit="emitInputSearch">
				<input
					type="text"
					v-model="inputSearch"
					placeholder="Inserisci il titolo" />
				<button>Search</button>
			</form>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

header {
	height: 10vh;
	background-color: black;

	.container {
		width: 70vw;
		margin-inline: auto;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img {
		max-width: 150px;
	}
}

form {
	display: flex;
	align-items: center;

	input {
		height: 2.5rem;
		width: 20rem;
		font-size: 1.2rem;
		padding: 0.5rem 0.5rem;
		margin-right: 0.5rem;
		padding: 0.5rem;
	}

	button {
		font-size: 1.2rem;
		line-height: 1rem;
		font-weight: 600;
		border: none;
		background-color: $accentColor;
		border-radius: 5px;
		color: white;
		padding: 0.75rem 1.5rem;
		transition: all 250ms;

		&:hover {
			background-color: #a30810;
		}
	}
}
</style>

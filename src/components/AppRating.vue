<script>
export default {
	props: {
		value: {
			type: Number,
			required: true,
		},
	},
	methods: {
		getStarClass(index) {
			const starValue = (index / 5) * 10;
			if (this.value >= starValue) {
				return ["fas", "star"];
			} else if (this.value >= starValue - 1) {
				return ["far", "star-half-stroke"];
			} else {
				return ["far", "star"];
			}
		},
	},
};
</script>

<template>
	<div class="rating">
		<font-awesome-icon
			v-for="index in 5"
			:key="index"
			:icon="getStarClass(index)" />
	</div>
</template>

<style lang="scss" scoped>
.rating {
	font-size: 24px;
	display: flex;
	justify-content: center;
	color: goldenrod;
}
</style>

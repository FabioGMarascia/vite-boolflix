<script>
import SingleCard from "./SingleCard.vue";
import store from "../../data/store.js";

export default {
	name: "CardList",
	components: {
		SingleCard,
		store,
	},
	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<span id="1" class="title text-black rounded py-3 px-5 fw-bold fs-3 border border-2">FILMS</span>
	<div class="filmBox row mx-0 justify-content-center mt-4">
		<SingleCard v-for="card in store.filmList" :element="card" />
	</div>

	<hr class="text-white border-5 my-5" />

	<span id="2" class="title text-black rounded py-3 px-5 fw-bold fs-3 border border-2"
		>TV SERIES</span
	>
	<div class="tvSeriesBox row mx-0 justify-content-center mt-4">
		<SingleCard v-for="card in store.tvSeriesList" :element="card" />
	</div>
</template>

<style scoped>
.title {
	background-color: red;
}
</style>

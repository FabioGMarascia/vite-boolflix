<script>
import FilmCard from "./FilmCard.vue";
import TvSeriesCard from "./TvSeriesCard.vue";
import store from "../../data/store.js";

export default {
	name: "CardList",
	components: {
		FilmCard,
		TvSeriesCard,
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
	<span class="title text-black rounded py-3 px-4 fw-bold fs-5 border border-2">FILMS</span>
	<div class="filmBox row mx-0 justify-content-center mt-4">
		<FilmCard v-for="card in store.filmList" :element="card" />
	</div>

	<hr class="text-white border-5 my-5" />

	<span class="title text-black rounded py-3 px-4 fw-bold fs-5 border border-2">TV SERIES</span>
	<div class="tvSeriesBox row mx-0 justify-content-center mt-4">
		<TvSeriesCard v-for="card in store.tvSeriesList" :element="card" />
	</div>
</template>

<style scoped>
.title {
	background-color: red;
}
</style>

<script>
import SingleCard from "./CardListComponents/SingleCard.vue";
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
	<div v-if="store.movieList != ``" class="moviesBox row mx-0 justify-content-center mb-5">
		<div>
			<span id="1" class="title text-black rounded py-3 px-5 fw-bold fs-3 border border-2">{{
				store.movieTitle
			}}</span>
			<hr class="text-white border-5 mt-5" />
		</div>

		<SingleCard v-for="card in store.movieList" :element="card" />
	</div>

	<div v-if="store.tvSeriesList != ``" class="tvSeriesBox row mx-0 justify-content-center">
		<div>
			<span id="2" class="title text-black rounded py-3 px-5 fw-bold fs-3 border border-2">{{
				store.tvSeriesTitle
			}}</span>
			<hr class="text-white border-5 mt-5" />
		</div>

		<SingleCard v-for="card in store.tvSeriesList" :element="card" />
	</div>
</template>

<style scoped>
.title {
	background-color: red;
}
</style>

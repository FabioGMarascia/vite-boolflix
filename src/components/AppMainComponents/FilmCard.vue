<script>
import store from "../../data/store.js";

export default {
	name: "FilmCard",
	components: {
		store,
	},
	props: { element: Object },
	data() {
		return {
			img: null,
			placeholderImgPath: `placeholder-locandine.jpg`,
			store,
		};
	},
	methods: {
		getImg(path) {
			let risultato = new URL(`../../assets/` + path, import.meta.url);
			return risultato.href;
		},
	},
};
</script>

<template>
	<div class="col-2 mb-3 px-0 m-4">
		<img
			:src="
				element.poster_path != null
					? `https://image.tmdb.org/t/p/w342` + element.poster_path
					: getImg(placeholderImgPath)
			"
			class="w-100" />

		<div class="cardInfoBox text-center py-4 px-2 border border-2 rounded-bottom bg-white">
			<h5 class="fw-bold">{{ "Title: " + element.title }}</h5>
			<div>{{ "Original title: " + element.original_title }}</div>
			<div class="lenguageBox">
				<div v-if="element.original_language == `it`">
					{{ "Lenguage: " }} <img class="flagImg" :src="getImg(store.flags.it)" />
				</div>

				<div v-else-if="element.original_language == `en`">
					{{ "Lenguage  " }} <img class="flagImg" :src="getImg(store.flags.en)" />
				</div>

				<div v-else-if="element.original_language == `ja`">
					{{ "Lenguage  " }} <img class="flagImg" :src="getImg(store.flags.ja)" />
				</div>

				<div v-else-if="element.original_language == `fr`">
					{{ "Lenguage  " }} <img class="flagImg" :src="getImg(store.flags.fr)" />
				</div>

				<div v-else-if="element.original_language == `es`">
					{{ "Lenguage  " }} <img class="flagImg" :src="getImg(store.flags.es)" />
				</div>

				<div v-else>{{ "Lenguage:  " + element.original_language }}</div>
			</div>
			<div>{{ "Vote: " + element.vote_average }}</div>
		</div>
	</div>
</template>

<style scoped>
.cardInfoBox {
	height: 13rem;
}

img {
	height: 27rem;
}

.flagImg {
	border: 1px solid black;
	width: 2rem;
	height: 100%;
}
</style>

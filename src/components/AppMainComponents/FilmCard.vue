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
			checkFlag: true,
		};
	},
	methods: {
		getImg(path) {
			let risultato = new URL(`../../assets/` + path, import.meta.url);
			return risultato.href;
		},
		getFlags(item) {
			if (item == `it`) {
				return this.getImg(store.flags.it);
			} else if (item == `en`) {
				return this.getImg(store.flags.en);
			} else if (item == `ja`) {
				return this.getImg(store.flags.ja);
			} else if (item == `fr`) {
				return this.getImg(store.flags.fr);
			} else if (item == `es`) {
				return this.getImg(store.flags.es);
			} else {
				this.checkFlag = false;
			}
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
			<div class="languageBox">
				<div v-if="checkFlag">
					Language: <img class="flagImg" :src="getFlags(element.original_language)" />
				</div>

				<div v-else>Language: {{ element.original_language }}</div>
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

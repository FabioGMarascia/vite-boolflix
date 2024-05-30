<script>
import store from "../../data/store.js";

export default {
	name: "SingleCard",
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
			if (item == "it") {
				return this.getImg(store.flags.it);
			} else if (item == "en") {
				return this.getImg(store.flags.en);
			} else if (item == "ja") {
				return this.getImg(store.flags.ja);
			} else if (item == "fr") {
				return this.getImg(store.flags.fr);
			} else if (item == "es") {
				return this.getImg(store.flags.es);
			} else {
				this.checkFlag = false;
			}
		},
		getStars(item) {
			let voteToStar = Math.round(item / 2);
			return voteToStar;
		},
		getEmptyStars(item) {
			let voteToStar = 5 - Math.round(item / 2);
			return voteToStar;
		},
		getTitles(element, element2) {
			if (element == undefined) {
				return element2;
			} else {
				return element;
			}
		},
	},
};
</script>

<template>
	<div class="card cardBox col-2 mb-3 px-0 m-4 border-2">
		<img
			:src="
				element.poster_path != null
					? `https://image.tmdb.org/t/p/w342` + element.poster_path
					: getImg(placeholderImgPath)
			"
			class="card-img w-100" />

		<div
			class="card-img-overlay cardInfoBox text-center p-2 fw-bold text-white bg-black overflow-auto lh-lg">
			<div class="card-text fw-bold subtitle">TITLE:</div>
			<span>{{ getTitles(element.title, element.name) }} </span>

			<div class="card-text subtitle">ORIGINAL TITLE:</div>
			<span>{{ getTitles(element.original_title, element.original_name) }}</span>

			<div class="languageBox card-text subtitle">
				<div v-if="checkFlag">
					LANGUAGE:
					<span class="ms-2"
						><img class="flagImg" :src="getFlags(element.original_language)" />
					</span>
				</div>

				<div v-else>
					LANGUAGE: <span class="ms-2">{{ element.original_language }}</span>
				</div>
			</div>

			<div class="voteBox card-text subtitle">
				VOTE: <i v-for="n in getStars(element.vote_average)" class="fa-solid fa-star"></i>
				<i v-for="n in getEmptyStars(element.vote_average)" class="fa-regular fa-star"></i>
				<span class="ms-2">{{ element.vote_average.toFixed(1) }} </span>
			</div>

			<div class="card-text subtitle">OVERVIEW:</div>
			<span>{{ element.overview }}</span>
		</div>
	</div>

	<!-- <div class="card">
		<img src="./assets/placeholder-locandine.jpg" class="card-img w-25" />
		<div class="card-img-overlay">
			<h2 class="card-title text-black">titolo</h2>
		</div>
	</div> -->
</template>

<style scoped>
img {
	height: 27rem;
}

.flagImg {
	border: 1px solid black;
	width: 2rem;
	height: 100%;
}

i {
	color: #ffd43b;
}

.cardInfoBox {
	opacity: 0;
}

.cardInfoBox:hover {
	opacity: 1;
}

.subtitle {
	color: red;
}

span {
	color: white;
}
</style>

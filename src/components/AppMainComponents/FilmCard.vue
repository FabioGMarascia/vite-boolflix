<script>
export default {
	name: "FilmCard",
	props: { element: Object },
	data() {
		return {
			img: null,
			placeholderImgPath: `placeholder-locandine.jpg`,
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

		<div class="cardInfoBox text-center py-4 px-2 border border-2 rounded bg-white">
			<h5 class="fw-bold">{{ "Title: " + element.title }}</h5>
			<div>{{ "Original title: " + element.original_title }}</div>
			<div>{{ "Lenguage: " + element.original_language }}</div>
			<div>{{ "Vote: " + element.vote_average }}</div>
		</div>
	</div>
</template>

<style scoped>
.cardInfoBox {
	height: 12rem;
}

img {
	height: 27rem;
}
</style>

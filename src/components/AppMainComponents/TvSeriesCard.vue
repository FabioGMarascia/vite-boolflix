<script>
export default {
	name: "TvSeriesCard",
	props: { element: Object },
};
</script>

<template>
	<div class="col-2 mb-3 px-0 m-4">
		<!-- <img :src=""> -->

		<div class="cardInfoBox text-center py-4 border border-2 rounded bg-white">
			<h5 class="fw-bold">{{ "Title: " + element.name }}</h5>
			<div>{{ "Original title: " + element.original_name }}</div>
			<div>{{ "Lenguage: " + element.original_language }}</div>
			<div>{{ "Vote: " + element.vote_average }}</div>
		</div>
	</div>
</template>

<style scoped></style>

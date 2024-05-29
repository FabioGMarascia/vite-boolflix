<script>
export default {
	name: "SingleCard",
	props: { element: Object },
};
</script>

<template>
	<div class="col-2 mx-2 mb-3 px-0">
		<!-- <img :src=""> -->

		<div class="cardInfoBox text-center py-4 border border-2 rounded bg-white">
			<h3 class="fw-bold">{{ "Title: " + element.title }}</h3>
			<div>{{ "Original title: " + element.original_title }}</div>
			<div>{{ "Lenguage: " + element.original_language }}</div>
			<div>{{ "Vote: " + element.vote_average }}</div>
		</div>
	</div>
</template>

<style scoped></style>

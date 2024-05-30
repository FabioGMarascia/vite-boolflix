<script>
import store from "../../data/store.js";

export default {
	name: "NavBar",
	components: {
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
	<div class="row mx-0">
		<div class="logo-box col-6 fw-bold display-6 py-3">BOOLFLIX</div>

		<div class="col-6 px-0 text-end my-auto">
			<a
				v-for="link in store.links"
				:href="link.url"
				class="my-link ms-3 text-decoration-none fw-bold fs-5 p-4">
				{{ link.name }}</a
			>
		</div>
	</div>
</template>

<style scoped>
.logo-box,
.my-link {
	color: red;
}

.my-link:hover {
	background-color: white;
}
</style>

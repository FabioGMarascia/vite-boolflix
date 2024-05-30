<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
	name: "App",
	components: {
		AppHeader,
		AppMain,
	},
	data() {
		return {
			checkScroll: false,
		};
	},
	methods: {
		backToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		},
		handleScroll() {
			if (window.scrollY > 20) {
				this.checkScroll = true;
				console.log(`ciao`);
			} else {
				this.checkScroll = false;
			}
		},
	},
	mounted() {
		window.addEventListener(`scroll`, this.handleScroll);
	},
};
</script>

<template>
	<AppHeader />

	<AppMain />

	<button
		type="button"
		class="btn btn-lg position-fixed"
		id="btn-scroll-top"
		v-if="checkScroll"
		@click="backToTop">
		<i class="fas fa-arrow-up fs-4"></i>
	</button>
</template>

<style scoped>
#btn-scroll-top {
	bottom: 20px;
	right: 20px;
	background-color: red;
}
</style>

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
		return {};
	},
	methods: {},
	mounted() {},
};
</script>

<template>
	<AppHeader />
	<AppMain />
</template>

<style scoped></style>

<script>
import Jumbotron from "./AppHeaderComponents/Jumbotron.vue";
import NavBar from "./AppHeaderComponents/NavBar.vue";

export default {
	name: "AppHeader",
	components: {
		Jumbotron,
		NavBar,
	},
};
</script>

<template>
	<div class="headerBox bg-black">
		<div class="container">
			<NavBar />
		</div>
	</div>
	<Jumbotron />
</template>

<style scoped></style>

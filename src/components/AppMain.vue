<script>
import CardList from "./AppMainComponents/CardList.vue";
import store from "../data/store.js";
import axios from "axios";

export default {
	name: "AppMain",
	components: {
		CardList,
		store,
	},
	data() {
		return {
			inputSearch: "",
			store,
		};
	},
	methods: {
		getFilms() {
			if (this.inputSearch != "") {
				const options = {
					method: "GET",
					url: "https://api.themoviedb.org/3/search/movie?api_key=a159ac6f152a4cd7c449aecc3ac8a31e",
					params: {
						query: this.inputSearch,
						include_adult: "true",
						language: "it-IT",
						page: "1",
					},
					headers: {
						accept: "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTU5YWM2ZjE1MmE0Y2Q3YzQ0OWFlY2MzYWM4YTMxZSIsInN1YiI6IjY2NTcwYjdlM2Q2ZWM5MWU1NjIxNTQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d592UGJ9kqS57EJYfxSmAvlCmFSs-NJOV4fwxSTDyKc",
					},
				};

				axios
					.request(options)
					.then(function (response) {
						store.filmList = response.data.results;
					})
					.catch(function (error) {
						console.error(error);
					});
			} else {
				store.filmList = store.popularFilms;
			}
		},
	},
	created() {
		const options = {
			method: "GET",
			url: "https://api.themoviedb.org/3/movie/popular?api_key=a159ac6f152a4cd7c449aecc3ac8a31e",
			params: { language: "it-IT", page: "1" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTU5YWM2ZjE1MmE0Y2Q3YzQ0OWFlY2MzYWM4YTMxZSIsInN1YiI6IjY2NTcwYjdlM2Q2ZWM5MWU1NjIxNTQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d592UGJ9kqS57EJYfxSmAvlCmFSs-NJOV4fwxSTDyKc",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				store.filmList = response.data.results;
				store.popularFilms = store.filmList;
			})
			.catch(function (error) {
				console.error(error);
			});
	},
};
</script>

<template>
	<div class="container">
		<div class="row mx-0 justify-content-center p-3 bg-danger">
			<div class="col-3 my-auto">
				<input type="text" v-model="inputSearch" class="input-group" @keyup.enter="getFilms" />
			</div>

			<div class="col-1 text-center">
				<button class="btn bg-warning fw-bold" @click="getFilms">SEARCH</button>
			</div>
		</div>

		<div class="cardListBox bg-black p-5">
			<CardList />
		</div>
	</div>
</template>

<style scoped></style>

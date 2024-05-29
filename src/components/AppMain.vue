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
		getFilmsAndSeres() {
			if (this.inputSearch != "") {
				// FILMS CALL
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

				// TV SERIES CALL
				const options2 = {
					method: "GET",
					url: "https://api.themoviedb.org/3/search/tv?api_key=a159ac6f152a4cd7c449aecc3ac8a31e",
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
					.request(options2)
					.then(function (response) {
						store.tvSeriesList = response.data.results;
					})
					.catch(function (error) {
						console.error(error);
					});
			} else {
				store.filmList = store.popularFilms;
				store.tvSeriesList = store.popularTvSeries;
			}
		},
	},
	created() {
		// FILMS CALL
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

		// TV SERIES CALL
		const options2 = {
			method: "GET",
			url: "https://api.themoviedb.org/3/tv/popular?api_key=a159ac6f152a4cd7c449aecc3ac8a31e",
			params: { language: "it-IT", page: "1" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTU5YWM2ZjE1MmE0Y2Q3YzQ0OWFlY2MzYWM4YTMxZSIsInN1YiI6IjY2NTcwYjdlM2Q2ZWM5MWU1NjIxNTQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d592UGJ9kqS57EJYfxSmAvlCmFSs-NJOV4fwxSTDyKc",
			},
		};

		axios
			.request(options2)
			.then(function (response) {
				store.tvSeriesList = response.data.results;
				store.popularTvSeries = store.tvSeriesList;
			})
			.catch(function (error) {
				console.error(error);
			});
	},
};
</script>

<template>
	<div class="searchBox row mx-0 justify-content-center p-3">
		<div class="col-3 my-auto">
			<input
				type="text"
				v-model="inputSearch"
				class="input-group fs-5"
				@keyup.enter="getFilmsAndSeres" />
		</div>

		<div class="col-1 text-center">
			<button class="searchBtn btn bg-black fw-bold" @click="getFilmsAndSeres">SEARCH</button>
		</div>
	</div>

	<div class="cardListBox bg-black p-5">
		<CardList />
	</div>
</template>

<style scoped>
.searchBox {
	background-color: red;
}

.searchBtn {
	color: red;
}
</style>

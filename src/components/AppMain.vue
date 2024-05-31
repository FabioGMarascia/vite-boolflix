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
			showFilter: false,
			inputSelectType: "",
			inputSelectMovieGenre: "",
			inputSelectTVSeriesGenre: "",
		};
	},
	methods: {
		getMovies() {
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
					store.movieList = response.data.results;
				})
				.catch(function (error) {
					console.error(error);
				});
		},

		getSeries() {
			const options = {
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
				.request(options)
				.then(function (response) {
					store.tvSeriesList = response.data.results;
				})
				.catch(function (error) {
					console.error(error);
				});
		},
		getMoviesByGenre() {
			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/discover/movie?api_key=a159ac6f152a4cd7c449aecc3ac8a31e",
				params: {
					include_adult: "true",
					language: "it-IT",
					page: "1",
					with_genres: this.inputSelectMovieGenre,
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
					store.tvSeriesList = "";
					store.movieList = response.data.results;
				})
				.catch(function (error) {
					console.error(error);
				});
		},

		getTvSeriesByGenre() {
			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/discover/tv?api_key=a159ac6f152a4cd7c449aecc3ac8a31e",
				params: {
					include_adult: "true",
					language: "it-IT",
					page: "1",
					with_genres: this.inputSelectTVSeriesGenre,
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
					store.movieList = "";
					store.tvSeriesList = response.data.results;
				})
				.catch(function (error) {
					console.error(error);
				});
		},
		getMoviesAndSeries() {
			this.inputSelectMovieGenre = "";
			this.inputSelectTVSeriesGenre = "";

			if (this.inputSearch != "") {
				if (this.inputSelectType == "Movies") {
					store.movieTitle = "MOVIES";
					this.getMovies();
					store.tvSeriesList = "";
				} else if (this.inputSelectType == "TV Series") {
					store.tvSeriesTitle = "TV SERIES";
					this.getSeries();
					store.movieList = "";
				} else {
					store.movieTitle = "MOVIES";
					store.tvSeriesTitle = "TV SERIES";
					// MOVIES CALL
					this.getMovies();

					// TV SERIES CALL
					this.getSeries();
				}
			} else {
				store.movieTitle = "POPULAR MOVIES";
				store.movieList = store.popularMovies;
				store.tvSeriesTitle = "POPULAR TV SERIES";
				store.tvSeriesList = store.popularTvSeries;
			}
		},
	},
	created() {
		// MOVIES CALL
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
				store.movieList = response.data.results;
				store.popularMovies = store.movieList;
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

		// GENRES MOVIE CALL
		const options3 = {
			method: "GET",
			url: "https://api.themoviedb.org/3/genre/movie/list?api_key=a159ac6f152a4cd7c449aecc3ac8a31e",
			params: { language: "en-US" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTU5YWM2ZjE1MmE0Y2Q3YzQ0OWFlY2MzYWM4YTMxZSIsInN1YiI6IjY2NTcwYjdlM2Q2ZWM5MWU1NjIxNTQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d592UGJ9kqS57EJYfxSmAvlCmFSs-NJOV4fwxSTDyKc",
			},
		};

		axios
			.request(options3)
			.then(function (response) {
				store.movieGenresList = response.data.genres;
			})
			.catch(function (error) {
				console.error(error);
			});

		// GENRES TV SERIES CALL
		const options4 = {
			method: "GET",
			url: "https://api.themoviedb.org/3/genre/tv/list?api_key=a159ac6f152a4cd7c449aecc3ac8a31e",
			params: { language: "en-US" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTU5YWM2ZjE1MmE0Y2Q3YzQ0OWFlY2MzYWM4YTMxZSIsInN1YiI6IjY2NTcwYjdlM2Q2ZWM5MWU1NjIxNTQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d592UGJ9kqS57EJYfxSmAvlCmFSs-NJOV4fwxSTDyKc",
			},
		};

		axios
			.request(options4)
			.then(function (response) {
				store.tvSeriesGenresList = response.data.genres;
			})
			.catch(function (error) {
				console.error(error);
			});
	},
};
</script>

<template>
	<div class="searchBox row mx-0 justify-content-center p-3">
		<div class="col-1 text-center">
			<button class="filterBtn btn bg-black fw-bold px-3" @click="showFilter = !showFilter">
				FILTERS
			</button>
		</div>

		<div class="col-3 my-auto">
			<input
				type="text"
				v-model="inputSearch"
				class="input-group fs-5"
				@keyup.enter="getMoviesAndSeries" />
		</div>

		<div class="col-1 text-center">
			<button class="searchBtn btn bg-black fw-bold" @click="getMoviesAndSeries">SEARCH</button>
		</div>

		<div class="col-12">
			<div class="row justify-content-center pt-3" v-show="showFilter">
				<div class="col-2">
					<select class="form-select fw-bold text-center" v-model="inputSelectType">
						<option value="">SELECT TYPE</option>
						<option>Movies</option>
						<option>TV Series</option>
						<option>ALL</option>
					</select>
				</div>

				<div class="col-2">
					<select
						class="form-select fw-bold text-center"
						v-model="inputSelectMovieGenre"
						@change="getMoviesByGenre">
						<option value="">SELECT MOVIE GENRE</option>
						<option
							v-for="genre in store.movieGenresList"
							:value="genre.id"
							@click="store.movieTitle = `MOVIES - ${genre.name}`">
							{{ genre.name }}
						</option>
					</select>
				</div>

				<div class="col-2">
					<select
						class="form-select fw-bold text-center"
						v-model="inputSelectTVSeriesGenre"
						@change="getTvSeriesByGenre">
						<option value="">SELECT TV SERIES GENRE</option>
						<option
							v-for="genre in store.tvSeriesGenresList"
							:value="genre.id"
							@click="store.tvSeriesTitle = `TV SERIES - ${genre.name}`">
							{{ genre.name }}
						</option>
					</select>
				</div>
			</div>
		</div>
	</div>

	<div class="cardListBox bg-black">
		<CardList />
	</div>
</template>

<style scoped>
.searchBox {
	background-color: red;
}

.searchBtn,
.filterBtn {
	color: red;
}

.cardListBox {
	padding: 4rem 7rem;
}
</style>

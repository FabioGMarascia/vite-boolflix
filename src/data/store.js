import { reactive } from "vue";

const myData = reactive({
	movieList: [],
	popularMovies: [],
	tvSeriesList: [],
	popularTvSeries: [],
	movieGenresList: [],
	tvSeriesGenresList: [],
	flags: {
		it: `it.svg`,
		en: `en.svg`,
		ja: `ja.svg`,
		fr: `fr.svg`,
		es: `es.svg`,
	},
	links: [
		{
			name: `MOVIES`,
			url: `#1`,
		},
		{
			name: `TV SERIES`,
			url: `#2`,
		},
	],
	movieTitle: "POPULAR MOVIES",
	tvSeriesTitle: "POPULAR TV SERIES",
});
export default myData;

import { reactive } from "vue";

const myData = reactive({
	filmList: [],
	popularFilms: [],
	tvSeriesList: [],
	popularTvSeries: [],
	flags: {
		it: `it.svg`,
		en: `en.svg`,
		ja: `ja.svg`,
		fr: `fr.svg`,
		es: `es.svg`,
	},
	links: [
		{
			name: `FILMS`,
			url: `#1`,
		},
		{
			name: `TV SERIES`,
			url: `#2`,
		},
	],
});
export default myData;

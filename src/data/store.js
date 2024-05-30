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
});
export default myData;

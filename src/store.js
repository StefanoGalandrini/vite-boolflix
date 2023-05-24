import {reactive} from "vue";

export const store = reactive({
	baseUrl: "https://image.tmdb.org/t/p/",
	movies: [],
	series: [],
});

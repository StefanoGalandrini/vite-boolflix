import {reactive} from "vue";

export const store = reactive({
	baseUrl: "https://image.tmdb.org/t/p/w342",
	movies: [],
	series: [],
	genres: [],
	actorsByMovieId: {},
	actorsByTVShowId: {},
});

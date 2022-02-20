<template>
  <div class="films-page _container">
    <h1 class="films__title title-large">Новинки</h1>
    <MoviesList :movies="movies" />
    <h1 class="films__titleToo title-large">Жанры</h1>
    <GenresList :genres="genres"/>
  </div>
</template>

<script>
import MoviesList from "./MoviesList";
import GenresList from "./GenresList";
import movies from "../mocks/movies";
import genres from "../mocks/genres";

export default {
  name: "FilmPage",
  components: {
    MoviesList,
    GenresList
  },
  data() {
    return {
      movies,
      genres
    };
  },
};
</script>

<style lang="scss" scoped>

@import "../scss/vars.scss";
@import "../scss/style.scss";
.films__title {
  position: relative;
  margin-left: 29px;

}
.films__title::before {
  content: "";
  display: block;
  width: 60px;
  height: 25px;
  background: url(../assets/New.svg);
  position: absolute;
  margin-left: -34px;
  
}
</style>

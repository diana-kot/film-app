<template>
  <div class="films-page _container">
    <p class="films__title title-large">Новинки</p>
    <MoviesList :movies="movies" />
    <p class="films__titleToo title-large">Жанры</p>
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

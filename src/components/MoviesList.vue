<template>
  <div class="movies">
    <div class="movies__items">
      <movie-card
        class="movie__card"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
  name: "MoviesList",
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    MovieCard,
  },
  methods: {
    getImgUrl(movie) {
      console.log(movie.id);
      return `../assets/movies/${movie.id}.jpg`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars.scss";
.movie-card {
  margin-bottom: 40px;
}
.movies {
  // .movies__items

  &__items {
    display: grid;
    column-gap: $gapGrid;
    row-gap: $gapGrid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin-bottom: 32px;

  }
}
.movie {
  // .movie__card

  &__card {
  }
}

@media (max-width: 767px) {
  
  .default-tabs__item {
    font-size: 20px;
  }
}
</style>

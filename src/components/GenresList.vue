<template>
  <div class="genres">
    <div class="genres__items">
      <genre-card
        class="genre__card"
        v-for="genre in genres"
        :key="genre.id"
        :genre="genre"
      />
    </div>
  </div>
</template>

<script>
import GenreCard from "./GenreCard";

export default {
  name: "genresList",
  props: {
    genres: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    GenreCard,
  },
  methods: {
    getImgUrl(genre) {
      console.log(genre.id);
      return `../assets/genres/${genre.id}.jpg`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars.scss";
.genre-card {
  margin-bottom: 40px;
}
.genres {
  // .genres__items
  

  &__items {
    display: grid;
    column-gap: $gapGrid;
    row-gap: $gapGrid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin-bottom: 72px;

  }
}
.genre {
  // .genre__card

  &__card {
  }
}
</style>

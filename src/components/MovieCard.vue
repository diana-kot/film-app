<template>
  <div class="movies__item item">
    <a href="#">
        <div class="movies__image">
      <img :src="movie.img" :alt="movie.title" class="item-img" />
    </div>
    <div class="item__txt">
      <p class="item__title">{{ movie.title }}</p>
      <div class="item__desc desc">
        <div class="desk__link">
          <p class="desk__txt">{{ movie.description }}</p>
        </div>
      </div>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars.scss";
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap");
.movies {
  // .movies__item

  &__item {
    position: relative;
    display: grid;
    grid-auto-flow: row;
    grid-template: auto 1fr minmax(15px, auto) / 1fr;
    transition: transform 0.3s;
  }

  // .movies__image

  &__image {
    display: block;
    position: relative;
    padding: 0px 0px 120% 0px;
    margin-bottom: 24px;
    min-height: 370px;
  }
}

.movies__item:hover .item__desc {
  display: flex;
}

.movies__item:hover .item-img {
  filter: brightness(40%);
  transition: transform 0.3s;
}
.movies__image img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 8px;
}
.item {
  // .item__title

  &__title {
    line-height: 24px;
    text-align: left;
    // margin-top: 17px;
  }

  // .item__desc

  &__desc {
    position: absolute;
    top: 1px;
    display: none;
    justify-content: center;
    width: 100%;
  }
}
.desk {
  // .desk__txt

  &__txt {
    color: $colorLidhtGray;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    padding: 16px;
    display: block;
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 14; /* количество строк */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

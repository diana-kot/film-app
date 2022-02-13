<template>
  <div class="genres__item item">
    <a href="#" class="genres__image">
      <img :src="genre.img" :alt="genre.title" class="item-img" />
      <div class="item__txt txt-modif">
        <img :src="genre.img_icon" :alt="genre.title" class="item-img-icon" />
      </div>
      <p class="item__title title-modif">{{ genre.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    genre: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars.scss";
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap");

.title-modif {
  color: $backgroundColor;
  top: 30%;
  position: absolute;
  top: 80%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}
.item {
  position: relative;
}
.txt-modif {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}
.genres__item:hover {
  filter: saturate(190%);
}
</style>

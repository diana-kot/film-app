<template>
  <div class="genres__item item">
    <a href="#" class="genres__image">
      <img :src="genre.img" :alt="genre.title" class="item-img" />
      <div class="item__txt txt-modif">
        <img :src="genre.img_icon" :alt="genre.title" class="item-img-icon" />
      </div>
      <div class="item__title title-modif">{{ genre.title }}</div>
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
  position: absolute;
  width: 100%;
  height: 100%;
  color: $backgroundColor;
  top: 30%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.item {
  position: relative;
  max-width: 280px;
}
.txt-modif {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  object-fit: cover;
}
.genres__item:hover {
  filter: saturate(190%);
}
</style>

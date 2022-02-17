<template>
  <div class="_container _containerModiv">
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <film-page />
      </div>
      <div v-if="currentTab === 'tab2'">
        <channel-page />
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "../components/VueTabsWithActiveLine.vue";
import FilmPage from "../components/FilmPage.vue";
import ChannelPage from "../components/ChannelPage.vue";

const TABS = [
  {
    title: "Фильмы",
    value: "tab1",
  },
  {
    title: "Телеканалы",
    value: "tab2",
  },
];

export default {
  name: "Home",
  components: {
    Tabs,
    FilmPage,
    ChannelPage,
  },
  data: () => ({
    tabs: TABS,
    currentTab: "tab1",
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/vars.scss";
@import "../scss/style.scss";
.default-tabs {
  position: relative;
  display: flex;
  justify-content: center;

  &__item {
    display: inline-block;
    padding-bottom: 8px;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    font-size: 28px;
    font-weight: 600;
    color: $colorDark;
    text-align: right;
    cursor: pointer;
    transition: all 0.25s;

    &_active {
      color: $colorBtn;
    }

    &:hover {
      border-bottom: 3px solid $colorBtn;
      color: $colorBtn;
    }

    &:focus {
      outline: none;
      border-bottom: 4px solid $colorBtn;
      color: $colorBtn;
    }
    &:not(:last-child) {
      margin-right: 25px;
    }
  }

  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: $colorBtn;
    font-weight: 600;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}

.content {
  margin-top: 32px;
}
._containerModiv {
  padding-left: calc(50% - #{$maxWidthChannel / 2});
  padding-right: calc(50% - #{$maxWidthChannel / 2});
}

@media (max-width: 1023px) {
  ._container {
    padding-left: calc(50% - #{$widthSiteSml / 2});
    padding-right: calc(50% - #{$widthSiteSml / 2});
  }
}

@media (max-width: 767px) {
  .default-tabs__item {
    font-size: 20px;
  }

  ._container {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 425px) {
  .default-tabs {
    margin-top: 28px;
  }
}
</style>

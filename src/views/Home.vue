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

  ._container {
    padding-left: 16px;
    padding-right: 16px;
  }
}

</style>

<template>
  <nav class="tabs" :class="wrapperClass">
    <button
      class="tabs__item"
      type="button"
      v-for="tab in tabs"
      :ref="tab.value"
      :key="tab.title"
      :class="[
        { tabs__item_active: tab.value === currentTab },
        tab.value === currentTab && tabActiveClass ? tabActiveClass : '',
        tabClass,
      ]"
      :disabled="tab.disabled || false"
      @click="handleClick(tab.value)"
      v-html="tab.title"
    />
  </nav>
</template>

<script>
export default {
  name: "vue-tabs-with-active-line",
  props: {
    currentTab: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    updated: {
      type: [Boolean, String, Array],
      default: undefined,
    },
    wrapperClass: {
      type: String,
      required: false,
    },
    tabClass: {
      type: String,
      required: false,
    },
    tabActiveClass: {
      type: String,
      required: false,
    },
    lineClass: {
      type: String,
      required: false,
    },
  },
  watch: {
    currentTab(newCurrentTab) {
      if (this.newTab === newCurrentTab) return;
      this.moveActiveLine(newCurrentTab);
      this.newTab = newCurrentTab;
    },
    updated() {
      this.moveActiveLine(this.currentTab);
    },
  },
  data: () => ({
    activeLineWidth: 0,
    activeLineOffset: 0,
    newTab: "",
  }),
  methods: {
    handleClick(value) {
      this.$emit("onClick", value);
      this.moveActiveLine(value);

      this.newTab = value;
    },
    moveActiveLine(newValue) {
      if (!this.currentTab) return;

      if (!this.$refs || !this.$refs[newValue] || !this.$refs[newValue][0])
        return;
      const element = this.$refs[newValue][0];

      this.activeLineWidth = element.clientWidth;
      this.activeLineOffset = element.offsetLeft;
    },
  },
  mounted() {
    this.moveActiveLine(this.currentTab);
    this.newTab = this.currentTab;
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
    font-size: 28px;
    font-weight: 600;
    color: $colorDark;
    text-align: right;
    cursor: pointer;
    transition: all 0.25s;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &_active {
      border-bottom: 2px solid $colorBtn;
      color: $colorBtn;
      box-shadow: 0px 7px 6px -5px rgba(0, 0, 0, 0.25);
    }

    &:hover {
      border-bottom: 2px solid $colorBtn;
      color: $colorBtn;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid $colorBtn;
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

@media (max-width: 767px) {
  .default-tabs__item {
    font-size: 20px;
  }
}

@media (max-width: 425px) {
  .default-tabs {
    margin-top: 60px;
  }
}
</style>

<template>
  <div class="wrapper wrapper__container">
    <Header @click="showModalAuth" />
    <auth-modal v-if="isAuthModalOpen" @close="isAuthModalOpen = false" />
    <main class="main">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import AuthModal from "../components/AuthModal";

export default {
  name: "main-layout",
  data: () => ({
    isAuthModalOpen: false,
  }),
  components: {
    Header,
    Footer,
    AuthModal,
  },
  methods: {
    showModalAuth() {
      this.isAuthModalOpen = true;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/vars.scss";
@import "../scss/style.scss";
</style>

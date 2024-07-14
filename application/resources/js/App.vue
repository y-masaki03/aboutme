<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <ScrollTop />
    <!-- <Nav /> -->
  </v-app>
</template>
<script>
import { RouterView } from "vue-router";
import Header from "./components/common/Header.vue";
import ScrollTop from "./components/common/ScrollTop.vue";
import Nav from "./components/common/Nav.vue";

export default {
  components: {
    RouterView,
    Header,
    ScrollTop,
    Nav,
  },
};
</script>

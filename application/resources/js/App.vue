<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <!-- <Nav /> -->
  </v-app>
</template>
<script>
import { RouterView } from "vue-router";
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
import Nav from "./components/common/Nav.vue";

export default {
  components: {
    RouterView,
    Header,
    Footer,
    Nav,
  },
};
</script>

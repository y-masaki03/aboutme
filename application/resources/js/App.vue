<template>
    <v-app>
        <Header />
        <v-main>
            <router-view />
        </v-main>
        <Footer />
    </v-app>
</template>
<script>
import { RouterView } from "vue-router";
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";

export default {
    components: {
        Header,
        Footer,
        RouterView,
    },
};
</script>

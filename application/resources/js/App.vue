<template>
    <v-app>
        <Header />
        <v-main>
            <AboutMe />
            <SkiilSet />
            <Experience />
            <Product />
            <News />
        </v-main>
        <Footer />
        <Nav />
    </v-app>
</template>
<script>
import { RouterView } from "vue-router";
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
import Nav from "./components/common/Nav.vue";
import AboutMe from "./components/AboutMe.vue";
import SkiilSet from "./components/SkiilSet.vue";
import Experience from "./components/Experience.vue";
import Product from "./components/Product.vue";
import News from "./components/News.vue";

export default {
    components: {
        Header,
        Footer,
        Nav,
        AboutMe,
        SkiilSet,
        Experience,
        Product,
        News,
        RouterView,
    },
};
</script>

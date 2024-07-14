import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../pages/NotFound.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import SkillSet from "../pages/SkillSet.vue";
import Experience from "../pages/Experience.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/skillset", name: "skillset", component: SkillSet },
    { path: "/experience", name: "experience", component: Experience },
    { path: '/:matchAll(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

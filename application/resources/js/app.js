import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import App from "./App.vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css'
import router from "./router";
import VueScrollTo from "vue-scrollto";

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);
app.use(router);
app.use(VueScrollTo);
app.use(vuetify);
app.mount('#app');


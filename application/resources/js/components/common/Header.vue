<template>
  <div>
    <v-app-bar color="teal-darken-4" dark app>
      <v-btn class="mx-2" color="white" variant="outlined" @click="goHome()">
        <template v-slot:prepend>
          <v-icon> {{ home.icon }} </v-icon>
        </template>
        {{ title }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-row class="mr-1">
        <v-spacer></v-spacer>
        <v-btn
          v-for="link in links"
          :key="link.title"
          class="hidden-sm-and-down mx-2"
          color="white"
          rounded="xl"
          variant="text"
          :to="link.path"
        >
          {{ link.title }}
        </v-btn>
      </v-row>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="changeDrawer()"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list density="compact" nav>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :prepend-icon="link.icon"
          :title="link.title"
          link
          :to="link.path"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "About Me",
    home: {
      icon: "mdi-account-heart-outline",
      link: "/",
    },
    links: [
      {
        icon: "mdi-home",
        title: "Home",
        path: "/",
      },
      {
        icon: "mdi-star-check",
        title: "Skill Set",
        path: "/skillset",
      },
      {
        icon: "mdi-monitor",
        title: "Experience",
        path: "/experience",
      },
    ],
    drawer: false,
  }),
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

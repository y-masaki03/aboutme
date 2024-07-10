<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        :prepend-avatar="user.avatar"
        :subtitle="user.subtitle"
        :title="user.title"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav v-for="link in links" :key="link">
      <v-list-item
        :prepend-icon="link.icon"
        :title="link.title"
        :value="link.value"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    user: {
      avatar: "/storage/images/avatar.png",
      subtitle: "1999/03/07",
      title: "Yukina Masaki",
    },
    links: [
      {
        icon: "mdi-home",
        title: "Home",
        value: "home",
      },
      {
        icon: "mdi-account-heart-outline",
        title: "About Me",
        value: "aboutMe",
      },
      {
        icon: "mdi-star-check",
        title: "Skill Set",
        value: "skillSet",
      },
      {
        icon: "mdi-monitor",
        title: "Experience",
        value: "experience",
      },
      {
        icon: "mdi-controller",
        title: "Product",
        value: "product",
      },
      {
        icon: "mdi-list-box-outline",
        title: "News",
        value: "news",
      },
    ],
  }),
};
</script>

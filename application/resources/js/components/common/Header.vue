<template>
  <v-app-bar color="teal-darken-4" dark app>
    <template v-slot:prepend>
      <v-icon aria-hidden="false"> {{ home.icon }} </v-icon>
    </template>
    <template v-slot:title>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
    </template>
    <v-btn
      v-for="link in links"
      :key="link"
      class="mx-2"
      color="white"
      rounded="xl"
      variant="text"
    >
      {{ link }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    title: "About Me",
    home: {
      icon: "mdi-home",
      link: "",
    },
    links: ["Home", "About Me", "Skill Set", "Experience", "Product", "News"],
  }),
};
</script>

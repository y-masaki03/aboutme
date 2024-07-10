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
      :key="link.title"
      class="mx-2"
      color="white"
      rounded="xl"
      variant="text"
      v-scroll-to="link.to"
    >
      {{ link.title }}
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
    links: [
      {title:"Home", to:"#aboutme"},
      {title:"About Me", to:"#aboutme"},
      {title:"Skill Set", to:"#skill"},
      {title:"Experience", to:"#experience"},
      {title:"Product", to:"#product"},
      {title:"News", to:"#news"},
    ]
  }),
};
</script>

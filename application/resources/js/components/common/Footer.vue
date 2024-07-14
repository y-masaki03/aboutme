<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
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
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — About Me
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
  links: [
      {title:"About Me", to:"#aboutme"},
      {title:"Skill Set", to:"#skill"},
      {title:"Experience", to:"#experience"},
      {title:"Release Note", to:"#release_note"},
    ]
  }),
};
</script>

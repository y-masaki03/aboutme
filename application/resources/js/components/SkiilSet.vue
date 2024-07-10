<template>
  <v-container id="skill">
    <p class="text-h3 bg-light-green">{{ title }}</p>
    <v-sheet height="20vh" class="bg-red-lighten-4"></v-sheet>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Skill Set",
  }),
};
</script>

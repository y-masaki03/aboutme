<template>
  <v-container>
    <p class="text-h3 mb-1">{{ title }}</p>
    <Profile />
    <v-divider class="border-opacity-50"></v-divider>
    <SkillSet />
    <v-divider class="border-opacity-50"></v-divider>
    <Experience />
    <v-divider class="border-opacity-50"></v-divider>
    <ReleaseNote />
    <v-divider class="border-opacity-50"></v-divider>
  </v-container>
</template>

<script>
import Profile from "../components/Home/Profile.vue";
import SkillSet from "../components/Home/SkillSet.vue";
import Experience from "../components/Home/Experience.vue";
import ReleaseNote from "../components/Home/ReleaseNote.vue";

export default {
  components: {
    Profile,
    SkillSet,
    Experience,
    ReleaseNote,
  },
  data: () => ({
    title: "Thank you for visiting my website!",
  }),
};
</script>
<template>
  <v-container>
    <p class="text-md-h3 title-font mb-1">{{ title }}</p>
    <v-divider class="mt-4 border-opacity-50"></v-divider>
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

<style>
.title-font {
  font-size: 1.25rem;
  font-weight: 550;
  line-height: 1.6;
  letter-spacing: 0.0125em;
}
</style>
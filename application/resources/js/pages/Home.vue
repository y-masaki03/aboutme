<template>
  <v-container>
    <p class="text-h3 mb-1">{{ title }}</p>
    <Profile />
    <SkillSet />
    <Experience />
    <ReleaseNote />
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
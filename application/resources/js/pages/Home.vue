<template>
  <v-container>
    <AboutMe />
    <SkillSet />
    <Experience />
    <ReleaseNote />
  </v-container>
</template>

<script>
import AboutMe from "../components/Home/AboutMe.vue";
import SkillSet from "../components/Home/SkillSet.vue";
import Experience from "../components/Home/Experience.vue";
import ReleaseNote from "../components/Home/ReleaseNote.vue";

export default {
  components: {
    AboutMe,
    SkillSet,
    Experience,
    ReleaseNote,
  },
};
</script>
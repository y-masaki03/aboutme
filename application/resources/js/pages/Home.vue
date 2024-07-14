<template>
  <v-container>
    <AboutMe />
    <SkillSet />
    <Experience />
    <News />
  </v-container>
</template>

<script>
import AboutMe from "../components/Home/AboutMe.vue";
import SkillSet from "../components/Home/SkillSet.vue";
import Experience from "../components/Home/Experience.vue";
import News from "../components/Home/News.vue";

export default {
  components: {
    AboutMe,
    SkillSet,
    Experience,
    News,
  },
};
</script>
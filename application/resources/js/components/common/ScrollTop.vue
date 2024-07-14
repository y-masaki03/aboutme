<template>
  <v-fab-transition>
    <v-btn
      id="page-top"
      color="teal-darken-4"
      icon="mdi-chevron-up"
      @click="scrollTop()"
      v-show="buttonActive"
    >
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data() {
    return {
      buttonActive: false,
      scroll: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollWindow);
  },
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollWindow() {
      const top = 100;
      this.scroll = window.scrollY;
      if (top <= this.scroll) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    },
  },
};
</script>

<style>
#page-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: 0.9;
}
</style>

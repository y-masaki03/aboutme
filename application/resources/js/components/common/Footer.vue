<template>
  <div>
    <v-footer>
      <v-container>
        <v-row justify="end" no-gutters>
          <v-btn color="black" icon="mdi-chevron-up" @click="scrollWindow()" />
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  methods: {
    scrollWindow() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

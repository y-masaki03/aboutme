
<template>
  <v-container>
    <v-row align-content="center" style="height: 500px">
      <v-col cols="12" md="12" align="center">
        <p class="mb-2 text-md-h4 text-h6 font-weight-bold">
          Sorry, the page you're looking for can't be found.
        </p>
        <p class="mb-2 text-subtitle-1">お探しのページが見つかりませんでした</p>
      </v-col>
      <v-col align="center">
        <v-btn @click="goHome">
          <v-icon class="mr-1"> mdi-home </v-icon>
          Home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

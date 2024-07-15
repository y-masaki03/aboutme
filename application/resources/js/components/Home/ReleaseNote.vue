<template>
  <v-container id="release_note">
    <v-card variant="text">
      <template v-slot:title>
        <span class="font-weight-black">{{ title }}</span>
      </template>
      <v-container class="pt-0">
        <v-card-item v-for="item in news" :key="item">
          <v-row class="px-2">
            <v-col cols="12" xl="1" md="2" class="pb-0 text-md-body-1 text-body-2">{{ item.date }}</v-col>
            <v-col class="text-md-body-1 text-body-2">
              {{ item.title }}
              <p class="text-grey-darken-2 text-caption">
                {{ item.subtitle }}
              </p>
            </v-col>
          </v-row>
        </v-card-item>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Release Note",
    news: [
      {
        date: "2024/07/17",
        title: "The 「About Me」 has been released.👏",
        subtitle: "laravel+Vue.js(Vuetify)で作成しました。",
      },
    ],
  }),
};
</script>

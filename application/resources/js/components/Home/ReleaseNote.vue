<template>
  <v-container id="release_note">
    <v-card variant="text">
      <template v-slot:title>
        <span class="font-weight-black">{{ title }}</span>
      </template>
      <v-container class="pt-0">
        <v-list lines="one">
          <v-list-item
            v-for="item in news"
            :key="item"
            :title="item.title"
            :subtitle="item.subtitle"
          >
            <template v-slot:prepend>
              <p class="mr-2">{{ item.date }}</p>
            </template>
          </v-list-item>
        </v-list>
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

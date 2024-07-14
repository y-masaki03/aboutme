<template>
  <v-container id="release_note">
    <p class="text-h4 mb-1">{{ title }}</p>
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
</template>

<script>
export default {
  data: () => ({
    title: "Release Note",
    news: [
      {
        date: "2024/07/17",
        title: "The 「About Me」 has been released.　👏",
        subtitle: "laravel+Vue.js(Vuetify)で作成しました。",
      },
    ],
  }),
};
</script>

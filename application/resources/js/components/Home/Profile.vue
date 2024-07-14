<template>
  <v-container id="aboutme">
    <v-card variant="text">
      <template v-slot:title>
        <span class="font-weight-black">{{ title }}</span>
      </template>
      <v-container class="pt-0">
        <v-list-item v-for="item in profile" :key="item" :title="item.text">
          <template v-slot:prepend>
            <p style="width: 150px">{{ item.title }}</p>
          </template>
        </v-list-item>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Profile",
    profile: [
      {
        title: "Name",
        text: "眞木 雪菜（Masaki Yukina）",
      },
      {
        title: "Speciality",
        text: "フロントエンド, サーバーサイド",
      },
      {
        title: "My Favorite",
        text: "Chloe Moretz（女優）、Sherlock Holmes（映画/ドラマ）、There Is No Game（ゲーム）、Pentatonix（音楽）",
      },
    ],
  }),
};
</script>

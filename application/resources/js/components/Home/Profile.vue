<template>
  <v-container id="aboutme">
    <v-card variant="text">
      <template v-slot:title>
        <span class="font-weight-black">{{ title }}</span>
      </template>
      <v-container class="pa-0">
        <v-card-item v-for="item in profile" :key="item">
          <v-row class="px-2">
            <v-col cols="12" md="2" class="text-grey-darken-2">{{
              item.title
            }}</v-col>
            <v-col>{{ item.text }}</v-col>
          </v-row>
        </v-card-item>
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
const title = "Profile";
const profile = [
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
];
</script>

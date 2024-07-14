<template>
  <div>
    <v-container id="skill">
      <v-card variant="text">
        <template v-slot:title>
          <span class="font-weight-black">{{ title }}</span>
        </template>
        <v-container class="pt-0">
          <v-row>
            <v-col cols="12" md="3" v-for="skill in skills" :key="skill">
              <v-card variant="outlined">
                <div class="ma-2">
                  <div class="text-h6">{{ skill.title }}</div>
                  <div
                    class="text-caption"
                    style="white-space: pre-wrap"
                    v-text="skill.text"
                  />
                </div>
                <div class="d-flex flex-row">
                  <v-tooltip
                    :text="list.name"
                    v-for="list in skill.list"
                    :key="list"
                  >
                    <template v-slot:activator="{ props }">
                      <v-img
                        class="ma-2"
                        v-bind="props"
                        max-width="35"
                        :src="list.img"
                      />
                    </template>
                  </v-tooltip>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-row justify="end" class="mr-1">
        <v-btn
          color="teal-lighten-1"
          text="More Info"
          class="text-none my-2"
          prepend-icon="mdi-open-in-new"
          size="small"
          @click="goSkillSet()"
        ></v-btn>
      </v-row>
    </v-container>
    <v-divider class="border-opacity-50"></v-divider>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Skill Set",
    skills: [
      {
        title: "Front end",
        text: "Vue.js、React.jsなどのSPA開発が好きです。bladeでのFormファサードを使用した実装も得意です。\n\n",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            name: "JavaScript",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            name: "TypeScript",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
            name: "Vue.js",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            name: "React.js",
          },
        ],
      },
      {
        title: "Server side",
        text: "laravelが一番得意です。OAuth認証、マルチテナント構築、APIの作成が好きです。\n※AWSはS3を主に使用したのでこちらに記載してます。",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
            name: "larvel",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-original.svg",
            name: "cakephp",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            name: "AWS(S3/EC2)",
          },
        ],
      },
      {
        title: "Database",
        text: "SQL文好きです。コーディングはEloquentなどで操作しますが、viewテーブルの作成や、pgAdminなどを使用してのDBデータの確認が得意です。CSVを使用してのインポートが得意です。",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            name: "MySQL",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            name: "postgreSQL",
          },
        ],
      },
      {
        title: "Others",
        text: "Dockerを使用しての実装が多いです。\nSE業務では、要件定義、設計でのドキュメント作成、チームメンバーへの概要説明などをしています。",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            name: "Docker",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
            name: "linux",
          },
          {
            img: "/storage/images/account-details-outline.png",
            name: "要件定義",
          },
          {
            img: "/storage/images/book-open-variant-outline.png",
            name: "基本設計・詳細設計",
          },
        ],
      },
    ],
  }),
  methods: {
    goSkillSet() {
      this.$router.push("/skillset");
    },
  },
};
</script>

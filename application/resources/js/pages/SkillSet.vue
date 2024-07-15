<template>
  <v-container>
    <p class="text-h4 mb-1 text-uppercase">{{ title }}</p>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="skill in skills" :key="skill">
          <v-card variant="outlined">
            <div class="ma-2">
              <div class="text-h6">{{ skill.title }}</div>
              <div
                class="text-caption"
                style="white-space: pre-wrap"
                v-text="skill.text"
              />
            </div>
            <v-card-item>
              <v-row v-for="list in skill.list" :key="list">
                <v-col class="pb-0">
                  <div class="d-flex flex-row">
                    <v-img max-width="35" :src="list.img" />
                    <p class="mx-3 mt-2">{{ list.name }}</p>
                  </div>
                </v-col>
                <v-col end class="pb-0">
                  <v-rating v-model="list.rating" readonly></v-rating>
                </v-col>
              </v-row>
              <div class="d-flex flex-row mt-2">
                <v-tooltip
                  :text="list.name"
                  location="bottom"
                  v-for="list in skill.others"
                  :key="list.name"
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
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
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
            rating: 5,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
            name: "Vue.js",
            rating: 4,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            name: "React.js",
            rating: 3,
          },
        ],
        others: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
            name: "HTML5",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
            name: "css3",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
            name: "sass",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg",
            name: "jQuery",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg",
            name: "vuetify",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
            name: "nuxtjs",
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
            rating: 5,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-original.svg",
            name: "cakephp",
            rating: 4,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            name: "AWS(S3/EC2)",
            rating: 2,
          },
        ],
        others: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
            name: "PHP",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
            name: "WordPress",
          },
        ],
      },
      {
        title: "Database",
        text: "実装ではEloquentなどで記述しますが、viewテーブルの作成やDB調査でSQLを記述するのが好きです。",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            name: "MySQL",
            rating: 5,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            name: "postgreSQL",
            rating: 4,
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
            rating: 4,
          },
          {
            img: "/storage/images/account-details-outline.png",
            name: "要件定義",
            rating: 2,
          },
          {
            img: "/storage/images/book-open-variant-outline.png",
            name: "基本設計・詳細設計",
            rating: 4,
          },
        ],
        others: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
            name: "linux",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            name: "git",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
            name: "github",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg",
            name: "gitlab",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg",
            name: "vscode",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original-wordmark.svg",
            name: "WindowsPC",
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
            name: "macbook",
          },
        ],
      },
    ],
  }),
};
</script>

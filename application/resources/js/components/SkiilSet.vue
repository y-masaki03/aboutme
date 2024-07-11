<template>
  <v-container id="skill">
    <p class="text-h4 mb-1">{{ title }}</p>
    <v-row>
      <v-col cols="12" md="4" v-for="skill in skills" :key="skill">
        <v-card variant="outlined" class="mx-auto" elevation="12">
          <div class="ma-2">
            <div class="text-h6">{{ skill.title }}</div>
            <div class="text-caption">
              {{ skill.text }}
            </div>
          </div>
          <v-card-item v-for="list in skill.list" :key="list">
            <v-row>
              <v-col cols="2" class="pr-0">
                <v-img max-width="35" :src="list.img" />
              </v-col>
              <v-col cols="10">
                <v-progress-linear
                  v-model="list.level"
                  rounded
                  height="25"
                  color="light-green-darken-1"
                  buffer-color="light-green-lighten-4"
                  buffer-value="100"
                  buffer-opacity="1"
                >
                  <template v-slot:default="{ value }">
                    <p>{{ list.name + " " + Math.ceil(value) }}%</p>
                  </template>
                </v-progress-linear>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Skill Set",
    skills: [
      {
        title: "Front end",
        text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            name: "JavaScript",
            level: 60,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            name: "TypeScript",
            level: 30,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
            name: "Vue.js",
            level: 50,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            name: "React.js",
            level: 30,
          },
        ],
      },
      {
        title: "Server side",
        text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
            name: "larvel",
            level: 80,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-original.svg",
            name: "cakephp",
            level: 70,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            name: "AWS(S3/EC2)",
            level: 60,
          },
        ],
      },
      {
        title: "Database",
        text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            name: "MySQL",
            level: 70,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            name: "postgreSQL",
            level: 70,
          },
        ],
      },
      {
        title: "Others",
        text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        list: [
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            name: "Docker",
            level: 80,
          },
          {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
            name: "linux",
            level: 80,
          },
        ],
      },
      {
        title: "SE",
        text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        list: [
          {
            img: "/storage/images/account-details.svg",
            name: "要件定義",
            level: 80,
          },
          {
            img: "/storage/images/book-open-variant.svg",
            name: "基本設計・詳細設計",
            level: 30,
          },
        ],
      },
    ],
  }),
};
</script>

<template>
  <v-container id="experience">
    <v-card variant="text">
      <template v-slot:title>
        <span class="font-weight-black">{{ title }}</span>
      </template>
      <v-container class="pt-0">
        <v-row>
          <v-col cols="12" md="4" v-for="project in projects" :key="project">
            <v-card class="bg-teal-lighten-5">
              <template v-slot:title>{{ project.name }}</template>
              <template v-slot:subtitle
                >{{ "参画期間：" + project.season }}
              </template>
              <v-card-text>
                <div class="mb-2">
                  <p class="text-body-2">プロジェクト概要</p>
                  <p class="ma-1 text-caption">{{ project.summary }}</p>
                </div>
                <div class="mb-2">
                  <p>担当工程</p>
                  <span v-for="process in project.processes" :key="process">
                    <v-chip
                      variant="outlined"
                      label
                      class="ma-1 text-caption"
                      >{{ process }}</v-chip
                    >
                  </span>
                  <span>{{ project.content }}</span>
                </div>
                <div>
                  <p>使用技術</p>
                  <span v-for="skill in project.skills" :key="skill">
                    <v-chip variant="outlined" class="ma-1 text-caption">{{
                      skill
                    }}</v-chip>
                  </span>
                </div>
              </v-card-text>
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
        @click="goExperience()"
      ></v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Experience",
    show: false,
    projects: [
      {
        name: "社内管理システムの新規開発",
        season: "2020/01~2020/03",
        summary: "社員と部署の紐付け、社内申請などを一括管理する業務システム",
        processes: ["コーディング", "テスト"],
        skills: ["laravel", "Vue.js", "Docker"],
      },
      {
        name: "社内管理システムの新規開発",
        season: "2020/01~2020/03",
        summary: "社員と部署の紐付け、社内申請などを一括管理する業務システム",
        processes: ["コーディング", "テスト"],
        skills: ["laravel", "Vue.js", "Docker"],
      },
      {
        name: "社内管理システムの新規開発",
        season: "2020/01~2020/03",
        summary: "社員と部署の紐付け、社内申請などを一括管理する業務システム",
        processes: ["コーディング", "テスト"],
        processes: ["コーディング", "テスト"],
        skills: ["laravel", "Vue.js", "Docker"],
      },
    ],
  }),
  methods: {
    goExperience() {
      this.$router.push("/experience");
    },
  },
};
</script>

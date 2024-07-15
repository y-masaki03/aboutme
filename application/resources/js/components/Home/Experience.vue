<template>
  <v-container id="experience">
    <v-card variant="text">
      <template v-slot:title>
        <span class="font-weight-black">{{ title }}</span>
      </template>
      <v-container class="pt-0">
        <v-row>
          <v-col cols="12" md="4" v-for="project in projects" :key="project">
            <v-card variant="text" class="bg-teal-lighten-5">
              <template v-slot:title
                >{{ project.name }}
                <p
                  class="text-caption"
                  style="white-space: pre-wrap"
                  v-text="project.sub"
              /></template>
              <template v-slot:subtitle
                ><p class="pt-2">{{ "参画期間：" + project.season }}</p>
              </template>
              <v-card-text>
                <div class="pb-2">
                  <p class="text-grey-darken-2">担当工程</p>
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
                  <p class="text-grey-darken-2">使用技術</p>
                  <span v-for="skill in project.skills" :key="skill">
                    <v-chip
                      size="small"
                      variant="outlined"
                      class="ma-1 text-caption"
                      >{{ skill }}</v-chip
                    >
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
        name: "製造業の注文管理機能開発",
        sub: "日本と海外の拠点間での製品の受注、見積もり、設計、製造の管理システム\n5つのサービスとの連携し、中間管理する役割も担う。スクラッチ開発。",
        season: "2024/01~now",
        summary:
          "◻︎ 設計\n　・要件定義\n　　・PowerPoint、wordでの資料作成\n　　・クライアントとの仕様確認\n　・基本設計\n　　・画面設計書\n　　・テーブル定義書\n　　・業務フロー図\n　　・ステータス遷移図\n　　・外部連携設計書\n\n◻︎ドメイン駆動設計に基づいた実装\n　・フロント：React(typescript)、サーバー： Laravel、Inertiaでの実装\n　・mockeyを使用してのテストコード\n　・スタブ機能（外部API用）\n　・ziggyでのURL生成\n　・prittierでのフォーマット修正\n　・viewテーブルの作成\n\n◻︎その他\n　・コードレビュー\n　・PGフォロー",
        processes: ["要件定義", "設計", "コーディング", "テスト", "その他"],
        roles: ["フロントエンド", "サーバーサイド"],
        skills: [
          "PHP",
          "laravel",
          "React",
          "TypeScript",
          "Inertia.js",
          "AWS",
          "PostgreSQL",
          "Postman",
          "Docker",
          "GitLab",
        ],
      },
      {
        name: "クレジットカード管理システムのリプレイス",
        sub: "BtoBのクレジットカード管理システム\ncakePHP2のサポート終了に伴い、2つのプロジェクトをLaravelにリプレイス",
        season: "2023/06~2023/12",
        summary:
          "◻︎ 設計\n　・総合テスト仕様書　レビュー/修正 40画面\n\n◻︎ 管理画面 50画面の書き換え・ライブラリ選定\n　・SQLをクエリビルダに書換（Pagination、脆弱性対策）\n　・OpenSSLを使用した暗号処理の実装\n　・リバースプロキシ対策の実装\n　・jQueryを使用した画面パーツの表示制御\n　・CSVファイルダウンロード機能の実装\n　・TSVファイルのアップロード、データ登録処理の実装\n　・Sortableを使用した一覧表のソート機能の実装\n\n◻︎ バッチ処理 18機能の書き換え\n　・csv、zipファイルの作成、設置\n　・不要レコードの削除、更新処理など",
        processes: ["コーディング", "テスト"],
        roles: ["フロントエンド", "サーバーサイド"],
        skills: [
          "PHP",
          "CakePHP",
          "laravel(Blade)",
          "ZAMPP",
          "Vagrant",
          "Docker",
          "MySQL",
          "GitLab",
        ],
      },
      {
        name: "広報活動支援サイトのリニューアル",
        sub: "BtoBの広報活動支援サイト（管理画面）、BtoCのPRサイト（公開画面）\nリニューアルに向けた、機能追加・リプレイス",
        season: "2022/04~2023/05",
        summary:
          "◻︎ 設計\n　・DB設計　\n　・ER図（mwbファイル）の修正\n\n◻︎ 公開画面のリプレイス（WordPressからlaravelへのシステム移行）\n　・WordPress管理データの調査、テーブルの変更、新規追加\n　・S3、WP DBからのデータ移行用SQL生成バッチの作成\n　・リニューアルデザインのHTMLの組込、jQueryの実装\n　・tenancyを使用したマルチテナントの実装\n　・Socialiteを使用したGoogleログイン機能の実装\n\n◻︎ 管理画面の機能追加\n　・画面追加に伴い、既存Web APIの返却値の変更\n　・外部api（TwitterAPI）でのデータ取得バッチ作成、WebAPIの追加\n　・公開画面のWordPress移行に伴う仕様変更",
        processes: ["設計", "コーディング", "テスト", "保守/運用"],
        roles: ["フロントエンド", "サーバーサイド"],
        skills: [
          "PHP",
          "CakePHP",
          "PostgreSQL",
          "JavaScript",
          "jQuery",
          "CSS",
          "HTML",
          "Docker",
          "WordPress",
          "Visual Studio",
          "GitLab",
          "AWS",
        ],
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

<template>
  <v-container>
    <p class="text-h4 mb-1 text-uppercase">{{ title }}</p>
    <v-container>
      <v-row>
        <v-col
          class="ma-auto"
          cols="12"
          md="8"
          v-for="project in projects"
          :key="project.name"
        >
          <v-card variant="outlined">
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
            <v-card-actions class="pt-0">
              <v-spacer></v-spacer>
              <v-btn
                size="sm"
                :icon="project.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="project.show = !project.show"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="project.show">
                <v-divider></v-divider>
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
                  <div class="pb-2">
                    <p class="text-grey-darken-2">職種・役割</p>
                    <span v-for="role in project.roles" :key="role">
                      <v-chip
                        variant="outlined"
                        label
                        class="ma-1 text-caption"
                        >{{ role }}</v-chip
                      >
                    </span>
                    <span>{{ project.content }}</span>
                  </div>
                  <div class="pb-2">
                    <p class="text-grey-darken-2">使用技術</p>
                    <span v-for="skill in project.skills" :key="skill">
                      <v-chip variant="outlined" class="ma-1 text-caption">{{
                        skill
                      }}</v-chip>
                    </span>
                  </div>
                  <div class="pb-2">
                    <p class="text-grey-darken-2">概要</p>
                    <p
                      class="ma-1"
                      style="white-space: pre-wrap"
                      v-text="project.summary"
                    />
                  </div>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Experience",
    projects: [
      {
        show: false,
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
        show: false,
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
        show: false,
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
      {
        show: false,
        name: "重機のオークションサイトのリニューアル",
        sub: "重機のオークションサイト、リニューアルに伴い機能追加",
        season: "2022/01~2022/03",
        summary:
          "◻︎ 機能追加\n　・公開画面\n　　・オークション日程の表示機能追加\n　・会員画面\n　　・デフォルト表示順の改修\n　　・お気に入り機能の追加\n　　・メール送信機能の追加",
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
          "Visual Studio",
          "GitLab",
        ],
      },
      {
        show: false,
        name: "顧客データ管理支援システムの新規開発",
        sub: "外部システムとの連携を行う中間管理支援サービス\n車両と顧客情報を紐付け、サービスの提供に繋げる業務システムの保守運用",
        season: "2021/01~2021/12",
        summary:
          "◻︎ 設計\n　・画面設計書\n　・シーケンス図\n　・バッチ仕様書\n　・API仕様書\n　・単体テスト仕様書\n\n◻︎ 保守・バグ改修\n　・検索項目の追加\n　・顧客と車両関連の同時削除処理の機能追加\n　・バグの調査、改修\n\n◻︎ 機能追加\n　・名寄せ機能の画面作成\n　・既存データの名寄せ機能実装（バッチ処理）\n　・外部システムの項目連携機能",
        processes: ["設計", "コーディング", "テスト", "保守/運用"],
        roles: ["フロントエンド", "サーバーサイド"],
        skills: [
          "PHP",
          "CakePHP",
          "ZAMPP",
          "JavaScript",
          "MySQL",
          "CSS",
          "HTML",
          "jQuery",
          "Postman",
          "GitLab",
        ],
      },
      {
        show: false,
        name: "社内管理システムの新規開発",
        sub: "社員と部署の紐付け、社内申請などを一括管理する業務システム",
        season: "2020/06~2020/12",
        summary:
          "◻︎ nuxt.js、laravelを使用したSPA開発\n\n◻︎ vuetifyを使用した画面作成\n　・モーダル作成\n　・セレクトボックス、検索での絞り込み機能\n　・ソート機能\n　・テーブル使用の縦横チェックボックス作成\n　・ファイルのアップロード、ダウンロード\n　・画像取得、表示\n\n◻︎ WebAPI作成\n　・S3への画像、ファイルのアップロード機能\n　・社員一覧機能のCRUD実装",
        processes: ["コーディング", "テスト", "保守/運用"],
        roles: ["フロントエンド", "サーバーサイド"],
        skills: [
          "PHP",
          "laravel",
          "Vue.js",
          "Vuetify",
          "Figma",
          "Docker",
          "MySQL",
          "SASS",
          "CSS",
          "HTML",
          "JavaScript",
          "jQuery",
          "Nuxt.js",
          "GitHub",
        ],
      },
    ],
  }),
};
</script>

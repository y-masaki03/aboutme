<template>
    <v-app-bar color="teal-darken-4" dark app>
        <template v-slot:prepend>
            <v-icon aria-hidden="false"> {{ home.icon }} </v-icon>
        </template>
        <template v-slot:title>
            <v-app-bar-title>{{ title }}</v-app-bar-title>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        title: "About Me",
        home: {
            icon: "mdi-home",
            link: "", //今回は設定しない
        },
    }),
};
</script>

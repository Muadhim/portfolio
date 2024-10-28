<template>
  <NuxtLayout>
    <AppHeader />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Mu'adhim",
  meta: [{ name: "description", content: "Hello I Am Mu'adhim a software engineer" }],
});

useSeoMeta({
  title: "Mu'adhim",
  ogTitle: "Mu'adhim",
  description: "Mu'adhim Portfolio",
  ogDescription: "Mu'adhim Portfolio",
  ogImage: "",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Preahvihear&display=swap");
</style>

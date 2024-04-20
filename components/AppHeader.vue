<template>
  <div
    class="flex justify-between bg-secondary text-white py-5 shadow-bottom-primary box-border"
  >
    <div class="w-1/2 flex justify-center">Mu'adhim</div>
    <div class="w-1/2 flex justify-around">
      <ul class="flex justify-between w-3/4">
        <li v-for="conf in menu" :key="conf.id" class="cursor-pointer">{{
          conf.title
        }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { menu } from "~/constants";
</script>

<style></style>

<template>
  <div class="flex justify-between bg-grey text-white py-5 shadow-bottom-primary box-border">
    <div class="w-1/2 flex justify-center">Mu'adhim</div>
    <div class="w-1/2 flex justify-around">
      <ul v-for="conf in config.menu" :key="conf.id">
       <li class="cursor-pointer">{{ conf.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from "~/config";
</script>

<style>

</style>


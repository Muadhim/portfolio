<template>
  <div class="w-full max-w-[1200px] mx-auto">
    <div id="about" class="">
      <div>
        <div>{{ config.name }}</div>
        <div class="w-40 h-40 rounded-full overflow-hidden"><img :src="config.profileImage" alt="profile" class="object-cover"></div>
        <div>{{ config.moto }}</div>
        <div>{{ config.subMoto }}&#128565;</div>
      </div>
      <div>about me</div>
    </div>
    
    <div id="experience"></div>

    <div id="work"></div>

    <div id="contact"></div>
  </div>
</template>

<script lang="ts" setup>
import config from '~/config';
</script>

<style>

</style>


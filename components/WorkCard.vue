<template>
  <div
    class="w-[570px] h-[192.5px] rounded-2xl bg-[#232D3F99] flex items-center gap-8 px-12 border-t-2 border-primary"
  >
    <NuxtImg
      v-if="imageSrc"
      :src="imageSrc"
      :alt="title"
      class="w-[115px] h-[115px] object-contain"
    />
    <div class="text-white max-w-[300px] flex flex-col gap-2">
      <h4 class="text-2xl font-semibold line-clamp-2">{{ title }}</h4>
      <p class="text-xs line-clamp-2">{{ desc }}</p>
      <button class="btn">LEARN MORE</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
});
</script>

<style></style>

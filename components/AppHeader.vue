<template>
  <div class="sticky top-0">

    <div class="flex justify-center md:justify-between bg-black py-5">
      <div class="w-1/2 justify-center hidden md:flex"><h2 class="text-white text-lg">EXPERIENCE</h2></div>
      <div class="w-1/2 flex gap-4 justify-center items-center">
          <h1 class="w-fit text-lg text-white">MU'ADHIM</h1>
          |
          <div class="flex gap-1">
            <img :src="currentImage" alt="sunny/night" class="w-6 h-6" />
            {{ time }}
          </div>
      </div>
      <div class="w-1/2 hidden md:flex justify-center"><h2 class="text-white text-lg">CONTACT ME</h2></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import sunnyImage from '@/assets/images/sunny.svg';
import bedtimeImage from '@/assets/images/bedtime.svg';

const currentImage = ref(new Date().getHours() < 18 ? sunnyImage : bedtimeImage);
const time = ref(
  new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date())
);

onMounted(() => {
  const interval = setInterval(() => {
    time.value = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
    currentImage.value = new Date().getHours() < 18 ? sunnyImage : bedtimeImage;
  }, 1000);
  onScopeDispose(() => clearInterval(interval));
});

</script>

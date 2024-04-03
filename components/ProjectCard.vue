<template>
  <div :class="containerClass">
    <div>
      <div class="text-primary text-base font-bold mb-1">{{ projectType }}</div>
      <div :class="titleClass">{{ title }}</div>
      <div class="w-fit max-w-[669px] h-fit rounded-xl glass p-4">
        <p :class="descriptionClass">{{ description }}</p>
      </div>
    </div>
    <div :class="imageContainerClass">
      <div :class="imageClass"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  projectType: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageSrc: {
    type: String,
  },
  isLeftToRight: {
    type: Boolean,
    default: true,
  },
});

const containerClass = computed(() => ({
  "flex items-center justify-between w-full h-fit": true,
  "flex-row-reverse": !props.isLeftToRight,
}));

const titleClass = computed(() => ({
  "text-4xl font-bold mb-8": true,
  "text-left": props.isLeftToRight,
  "text-right": !props.isLeftToRight,
}));

const descriptionClass = computed(() => ({
  "line-clamp-4": true,
  "text-left": props.isLeftToRight,
  "text-right": !props.isLeftToRight,
}));

const imageContainerClass = computed(() => ({
  "w-[600px] h-[340px] rounded-xl pt-10 overflow-hidden bg-black flex bg-black":
    true,
  "-ml-32 pl-12 justify-end": props.isLeftToRight,
  "-mr-32 pr-12 justify-start": !props.isLeftToRight,
}));

const imageClass = computed(() => ({
  "bg-white w-[568px] h-[354px]": true,
  "rounded-tl-xl": props.isLeftToRight,
  "rounded-tr-xl": !props.isLeftToRight,
}));
</script>

<style></style>

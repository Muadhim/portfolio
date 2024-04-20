<template>
  <div :class="containerClass">
    <div>
      <div
        class="text-primary text-base font-bold mb-1"
        :class="{ 'text-right': !isLeftToRight }"
        >{{ projectType }}
      </div>
      <div :class="titleClass">{{ title }}</div>
      <div class="w-fit max-w-[669px] h-fit rounded-xl glass p-4">
        <p :class="descriptionClass">{{ description }}</p>
      </div>
      <ul class="flex flex-wrap z-10 w-full max-w-[600px]">
        <li
          v-for="(pt, index) in project_tech"
          :key="index"
          class="text-primary pl-2 font-semibold text-base"
          >{{ pt.tech }}</li
        >
      </ul>
    </div>
    <div :class="imageContainerClass">
      <NuxtImg v-if="imageSrc" :class="imageClass" :src="imageSrc" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import type { Database, Tables } from "@/types/supabase";
const supabase = useSupabaseClient<Database>();

const project_tech: Ref<{ tech: string | null }[]> = ref([]);

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
  projectId: {
    type: Number,
    required: true,
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
  "bg-white w-[568px] h-[354px] object-contain": true,
  "rounded-tl-xl": props.isLeftToRight,
  "rounded-tr-xl": !props.isLeftToRight,
}));

async function loadData() {
  console.log("project id: " + props.projectId);
  try {
    console.log("project id: " + props.projectId);
    const { data, error } = await supabase
      .from("project_tech")
      .select("tech")
      .eq("project_id", props.projectId);

    if (error) {
      throw new Error(error.message);
    }

    if (!data) {
      console.log("No data received from the query.");
      return;
    }

    console.log("Received data:", data);
    project_tech.value = data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div
    v-if="isLoading"
    class="w-full h-screen flex items-center justify-center"
  >
    <div class="loader" /> 
    <div
      class="profile-shine absolute w-[800px] h-[800px] profile-shine -z-30 left-1/2 -translate-x-1/2"
    />
  </div>
  <div v-else class="w-full mx-auto">
    <div class="relative">
      <div class="w-full flex justify-center items-center h-fit">
        <img src="~/assets/images/profile.svg" alt="hero" class="w-[700px] lg:w-[1000px] lg:-mt-[100px] h fit" />
      </div>
      <img src="~/assets/images/about-bg.svg" alt="hero" class="w-full h-fit -mt-32 md:-mt-48 lg:-mt-[350px]" />
    </div>
    
    <div id="experience"></div>
    <div id="social"></div>
  </div>
</template>

<script lang="ts" setup>
import type { Database, Tables } from "@/types/supabase";

const supabase = useSupabaseClient<Database>();

const about_me = ref<Tables<"about_me"> | null>(null);
const projects = ref<Tables<"project">[] | null>(null);
const work_experience = ref<Tables<"work_experience">[] | null>(null);

const isLoading = ref(true);

async function loadData() {
  try {
    const [aboutMeData, projectData, workExperienceData] = await Promise.all([
      supabase.from("about_me").select("*").single(),
      supabase.from("project").select("*"),
      supabase.from("work_experience").select("*"),
    ]);

    if (aboutMeData.error || projectData.error || workExperienceData.error) {
      throw new Error("Failed to fetch data");
    }

    about_me.value = aboutMeData.data;
    projects.value = projectData.data;
    work_experience.value = workExperienceData.data;

    console.log("project : " + projects.value?.map((e) => e));
  } catch (error) {
    console.error(
      "Error fetching data:",
      error instanceof Error ? error.message : "Unknown error"
    );
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  loadData();
});
</script>

<style lang="scss">
@import "~/assets/css/loader.scss";
</style>

<template>
  <div
    v-if="isLoading"
    class="w-full h-screen flex items-center justify-center"
  >
    <div class="loader"> </div>
    <div
      class="profile-shine absolute w-[800px] h-[800px] profile-shine -z-30 left-1/2 -translate-x-1/2"
    >
    </div>
  </div>
  <div v-else class="w-full max-w-[1200px] mx-auto px-4">
    <div id="about">
      <div class="w-4/6 mt-28 flex relative justify-between py-10">
        <div class="absolute -top-10 left-32">
          <img
            src="@/assets/images/arrow.svg"
            alt="arrow"
            class="w-full h-full"
          />
        </div>
        <div class="absolute -top-14 left-56">
          Hello I Am
          <span class="text-primary font-bold text-2xl">{{
            about_me?.name
          }}</span>
        </div>
        <div class="profile-shine absolute w-96 h-96 -top-10 -left-20 -z-30" />
        <div class="w-52 h-52 rounded-full overflow-hidden relative">
          <NuxtImg
            :src="about_me?.profile_img ?? '@/assets/images/profile.png'"
            loading="lazy"
            alt="profile"
            class="object-cover"
          />
        </div>
        <div class="justify-end w-2/3">
          <div class="text-5xl hover-text-shadow">{{
            about_me?.motivation
          }}</div>
          <div class="text-md mt-4">{{ about_me?.motivation2 }}</div>
        </div>
      </div>
      <div class="mt-4">
        <h1 class="text-5xl font-normal text-left"
          >I'm a {{ about_me?.profession }}.</h1
        >
        <h2 v-if="about_me?.current_job" class="text-xl font-normal"
          >Currently, I'm a {{ about_me?.profession }} at
          <NuxtImg
            class="w-6 inline-block"
            :src="about_me.current_office_url!"
          />
          <NuxtLink
            :to="about_me.current_office_url!"
            target="_blank"
            class="text-primary ml-1"
            >{{ about_me.current_job }}</NuxtLink
          >
        </h2>
        <p class="w-full max-w-[892px] mt-16 text-2xl">{{ about_me?.desc }}</p>
      </div>
    </div>

    <div id="experience" class="mt-48">
      <h2 class="text-4xl mb-10">Work Experience</h2>
      <div class="relative flex flex-col justify-center">
        <div
          class="profile-shine absolute w-[800px] h-[800px] profile-shine -z-30 left-1/2 -translate-x-1/2"
        />
        <ul
          class="flex justify-center flex-wrap w-full max-w-[1165px] mx-auto mt-5 gap-5"
        >
          <li v-for="(exp, index) in work_experience" :key="index" class="">
            <WorkCard
              v-if="index < 4"
              :image-src="exp.image!"
              :title="exp.title!"
              :desc="exp.desc!"
            />
          </li>
        </ul>
        <button
          v-if="work_experience?.length! > 4"
          class="mx-auto text-primary hover-text-shadow"
          >See more...</button
        >
      </div>
    </div>

    <div id="skills" class="my-4">
      <Skills />
    </div>

    <div id="project" class="my-48 h-fit w-full">
      <ul>
        <li v-for="(proj, index) in projects" :key="index" class="my-10">
          <ProjectCard
            v-if="index < 4"
            :title="proj?.title ?? ''"
            :description="proj?.desc ?? ''"
            :imageSrc="proj?.image ?? ''"
            :project-type="proj?.type ?? ''"
            :is-left-to-right="index % 2 === 0"
            :project-id="proj.id"
          />
        </li>
      </ul>
      <button
        v-if="projects?.length! > 4"
        class="mx-auto text-primary hover-text-shadow"
        >See more...</button
      >
    </div>

    <div id="contact"></div>
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

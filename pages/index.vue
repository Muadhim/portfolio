<template>
  <div class="w-full max-w-[1200px] mx-auto">
    <div id="about">
      <div class="w-4/6 mt-28 flex relative justify-between py-10">
        <div class="absolute">
          <arrowCrookedVue color="#005B41" />
        </div>
        <div class="absolute -top-14 left-36">
          Hello I Am
          <span class="text-primary font-normal text-xl">{{
            config.name
          }}</span>
        </div>
        <div
          class="profile-shine absolute w-80 h-80 profile-shine -top-10 -left-20 -z-30"
        />
        <div class="w-40 h-40 rounded-full overflow-hidden relative">
          <img
            src="@/assets/images/profile.png"
            alt="profile"
            class="object-cover"
          />
        </div>
        <div class="justify-end w-2/3">
          <div class="text-5xl hover-text-shadow">{{ config.justText0 }}</div>
          <div class="text-xs mt-4">{{ config.justText1 }}&#128517;</div>
        </div>
      </div>
      <div class="mt-4">
        <h1 class="text-5xl font-normal">I'm a {{ config.profession }}.</h1>
        <h2 class="text-xl font-normal"
          >Currently, I'm a {{ config.profession }} at
          <NuxtImg class="w-6 inline-block" :src="config.officeLogo" />
          <NuxtLink :to="config.officeUrl" target="_blank">{{
            config.workIn
          }}</NuxtLink>
        </h2>
        <p class="w-full max-w-[892px] mt-16 text-2xl">{{ config.aboutMe }}</p>
      </div>
    </div>

    <div id="experience" class="mt-48">
      <h2 class="text-4xl mb-10">Work Experience</h2>
      <div class="relative flex flex-col justify-center">
        <div class="profile-shine absolute w-[800px] h-[800px] profile-shine -z-30 left-1/2 -translate-x-1/2 "/>
        <ul class="flex flex-wrap w-full max-w-[1165px] mx-auto mt-5 gap-5">
          <li v-for="(exp, index) in config.workExperiences" :key="index" class="">
            <WorkCard
              v-if="index < 4"
              :image-src="exp.imageUrl"
              :title="exp.title"
              :desc="exp.desc"
            />
          </li>
        </ul>
        <button v-if="config.workExperiences.length > 4" class="mx-auto text-primary hover-text-shadow">See more...</button>
      </div>
    </div>

    <div id="project">
      
    </div>

    <div id="contact"></div>
  </div>
</template>

<script lang="ts" setup>
import type arrowCrookedVue from "~/assets/illustrations/arrow-crooked.vue";
import config from "~/config";
</script>

<style></style>

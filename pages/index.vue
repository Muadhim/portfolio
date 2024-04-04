<template>
  <div class="w-full max-w-[1200px] mx-auto">
    <div id="about">
      <div class="w-4/6 mt-28 flex relative justify-between py-10">
        <div class="absolute">
          <arrowCrookedVue color="#005B41" />
        </div>
        <div class="absolute -top-14 left-36">
          Hello I Am
          <span class="text-primary font-normal text-xl">{{ name }}</span>
        </div>
        <div class="profile-shine absolute w-96 h-96 -top-10 -left-20 -z-30" />
        <div class="w-52 h-52 rounded-full overflow-hidden relative">
          <img
            src="@/assets/images/profile.png"
            alt="profile"
            class="object-cover"
          />
        </div>
        <div class="justify-end w-2/3">
          <div class="text-5xl hover-text-shadow">{{ justText0 }}</div>
          <div class="text-xs mt-4">{{ justText1 }}&#128517;</div>
        </div>
      </div>
      <div class="mt-4">
        <h1 class="text-5xl font-normal text-left">I'm a {{ profession }}.</h1>
        <h2 v-if="profession" class="text-xl font-normal"
          >Currently, I'm a {{ profession }} at
          <NuxtImg class="w-6 inline-block" :src="officeLogo" />
          <NuxtLink :to="officeUrl" target="_blank">{{ workIn }}</NuxtLink>
        </h2>
        <p class="w-full max-w-[892px] mt-16 text-2xl">{{ aboutMe }}</p>
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
          <li v-for="(exp, index) in workExperiences" :key="index" class="">
            <WorkCard
              v-if="index < 4"
              :image-src="exp.imageUrl"
              :title="exp.title"
              :desc="exp.desc"
            />
          </li>
        </ul>
        <button
          v-if="workExperiences.length > 4"
          class="mx-auto text-primary hover-text-shadow"
          >See more...</button
        >
      </div>
    </div>

    <div id="skills" class="my-32">
      <h2 class="text-4xl mb-10">My Skill</h2>
      <Skills />
    </div>

    <div id="project" class="my-48 h-fit w-full">
      <ul>
        <li v-for="(proj, index) in projects" :key="index" class="my-10">
          <ProjectCard
            v-if="index < 4"
            :title="proj.title"
            :description="proj.desc"
            :imageSrc="proj.image"
            :project-type="proj.type"
            :is-left-to-right="index % 2 === 0"
          />
        </li>
      </ul>
      <button
        v-if="projects.length > 4"
        class="mx-auto text-primary hover-text-shadow"
        >See more...</button
      >
    </div>

    <div id="contact"></div>
  </div>
</template>

<script lang="ts" setup>
import {
  name,
  justText0,
  justText1,
  profession,
  workIn,
  officeLogo,
  officeUrl,
  aboutMe,
  workExperiences,
  projects,
} from "~/constants";
</script>

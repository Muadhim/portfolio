<template>
  <div class="w-full h-[600px] view-3D">
    <div id="title" class="">My Skills</div>
    <div id="universe" class="scale-stretched">
      <div id="solar-system" class="earth">
        <div v-for="(skill, index) in skills" :key="index">
          <div
            :id="skill.id"
            class="orbit"
            :class="orbitClass(skill.id)"
            :style="{
              zIndex: index + 1,
              'animation-duration': index + 20 + 's',
            }"
          >
            <div class="pos" :class="posClass(skill.id)">
              <div
                class="planet"
                :class="planetClass(skill.id)"
                :style="{
                  'background-image': 'url(' + skill.image + ')',
                  'animation-duration': index + 20 + 's',
                }"
              >
                <dl class="infos">
                  <dt>{{ skill.desc }}</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div id="skill">
          <dl class="infos">
            <dt>Skill</dt>
            <dd><span></span></dd>
          </dl>
        </div>
      </div>
    </div>
    <div id="data">
      <a
        v-for="(skill, index) in skills"
        :key="index"
        :class="skill.id"
        title="sun"
        href="#sunspeed"
        @click="showData"
      >
        {{ skill.id }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skills } from "~/constants";

const orbitClass = (id: string) => {
  const index = skills.findIndex((skill) => skill.id === id);
  const condition = index % 4;

  switch (condition) {
    case 0:
      return "orbit1";
    case 1:
      return "orbit2";
    case 2:
      return "orbit3";
    case 3:
      return "orbit4";
    default:
      return "";
  }
};
const planetClass = (id: string) => {
  const index = skills.findIndex((skill) => skill.id === id);
  const condition = index % 4;

  switch (condition) {
    case 0:
      return "shadow1";
    case 1:
      return "shadow2";
    case 2:
      return "shadow3";
    case 3:
      return "shadow4";
    default:
      return "";
  }
};
const posClass = (id: string) => {
  const index = skills.findIndex((skill) => skill.id === id);
  const condition = index % 4;

  switch (condition) {
    case 0:
      return "pos1";
    case 1:
      return "pos2";
    case 2:
      return "pos3";
    case 3:
      return "pos4";
    default:
      return "";
  }
};
const showData = () => {};
</script>

<style lang="scss">
@import "~/assets/css/skills.scss";

#skill {
  background-image: url("~/assets/images/skill.svg");
}
</style>

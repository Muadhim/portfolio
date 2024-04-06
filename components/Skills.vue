<template>
  <div class="w-full h-[600px] view-3D">
    <div id="universe" class="scale-stretched">
      <div id="solar-system" :class="solarsysClass">
        <div v-for="(skill, index) in skills" :key="index">
          <div
            :id="skill.id"
            class="orbit"
            :class="orbitClass(index)"
            :style="{
              zIndex: index + 1,
              'animation-duration': index + 20 + 's',
            }"
          >
            <div class="pos" :class="posClass(index)">
              <div
                class="planet"
                :class="planetClass(index)"
                :style="{
                  'background-image': 'url(' + skill.image + ')',
                  'animation-duration': index + 20 + 's',
                }"
              >
                <dl
                  class="infos"
                  :class="{ 'active-infos': skill.id == solarsysClass }"
                >
                  <dt>{{ skill.id }}</dt>
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
        :class="{ [skill.id]: true, active: skill.id == solarsysClass }"
        class="text-primary"
        :title="skill.id"
        :href="'#' + skill.id + 'info'"
        @click="showInfo(skill.id)"
      >
        {{ skill.id }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skills } from "~/constants";

const solarsysClass = ref("");
const orbitClass = (index: number) => `orbit${(index % 4) + 1}`;
const planetClass = (index: number) => `shadow${(index % 4) + 1}`;
const posClass = (index: number) => `pos${(index % 4) + 1}`;
const showInfo = (ref: string) => {
  solarsysClass.value = ref;
};
</script>

<style lang="scss">
@import "~/assets/css/skills.scss";

#skill {
  background-image: url("~/assets/images/skill.svg");
}
</style>

<template>
  <div class="w-full h-[600px] view-3D">
    <div id="universe" class="scale-stretched">
      <div id="solar-system" :class="solarsysClass">
        <div v-for="(skill, index) in skills" :key="index">
          <div
            :id="skill.name ?? ''"
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
                  :class="{ 'active-infos': skill.name == solarsysClass }"
                >
                  <dt>{{ skill.name }}</dt>
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
        :class="{
          [skill.name ?? '']: true,
          active: skill.name == solarsysClass,
        }"
        class="text-primary"
        :title="skill.name ?? ''"
        :href="'#' + skill.name + 'info'"
        @click="showInfo(skill.name ?? '')"
      >
        {{ skill.name }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Database, Tables } from "@/types/supabase";

const supabase = useSupabaseClient<Database>();
const skills = ref<Tables<"skill">[] | null>(null);

async function getSkill() {
  try {
    const { data, error } = await supabase
      .from("skill")
      .select("*")
      .returns<Tables<"skill">[]>();

    if (error) throw error;

    if (data) skills.value = data;
  } catch (error) {
    console.error(
      "Error fetching skill:",
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}

const solarsysClass = ref("");
const orbitClass = (index: number) => `orbit${(index % 4) + 1}`;
const planetClass = (index: number) => `shadow${(index % 4) + 1}`;
const posClass = (index: number) => `pos${(index % 4) + 1}`;
const showInfo = (ref: string) => (solarsysClass.value = ref);

onMounted(() => {
  getSkill();
});
</script>

<style lang="scss">
@import "~/assets/css/skills.scss";

#skill {
  background-image: url("~/assets/images/skill.svg");
}
</style>

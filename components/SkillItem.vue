<template>
  <div :id="title" class="orbit">
    <div class="pos">
      <div class="planet">
        <dl class="infos">
          <dt>{{ desc }}</dt>
          <dd><span></span></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
});
</script>

<style></style>

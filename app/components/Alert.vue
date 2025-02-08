<template>
  <div
    :class="{
      'text-green-500': color === 'green',
      'text-orange-500': color === 'orange',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    default: "orange",
  },
});
</script>

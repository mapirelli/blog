<script setup lang="ts">
const route = useRoute();

// remove trailing slash from path
const actualPath = route.path.replace(/\/$/, "");

const { data: page } = await useAsyncData("page-" + actualPath, () => {
  return queryCollection("content").path(actualPath).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>

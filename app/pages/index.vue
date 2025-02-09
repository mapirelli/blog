<template>
  <div>
    <h1 class="font-bold text-3xl text-(--ui-primary)">
      Fullstack web developer
    </h1>

    <UAlert
      title="Heads up!"
      description="You can change the primary color in your app config."
      icon="i-lucide-terminal"
    />
    <div class="my-4">
      <USeparator label="Hello World" />
    </div>

    <div class="flex items-center gap-2">
      <UButton
        label="Documentation"
        icon="i-lucide-square-play"
        to="https://ui3.nuxt.dev/getting-started/installation/nuxt"
        target="_blank"
      />

      <UButton
        label="GitHub"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-github"
        to="https://github.com/nuxt/ui"
        target="_blank"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>

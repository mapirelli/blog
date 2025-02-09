<template>
  <div class="bg-white sticky top-0">
    <UContainer>
      <div class="flex justify-between py-6">
        <div class="flex gap-2 items-center">
          <UAvatar src="https://github.com/nuxt.png" size="lg" />
          <div class="font-semibold text-lg">Mariano Pirelli Villanueva</div>
        </div>
        <div class="font-semibold text-lg">
          <nav>
            <ul class="flex gap-4 items-center">
              <li><ULink to="/">Home</ULink></li>
              <li><ULink to="/now">Now</ULink></li>
              <li><ULink to="/blog">Blog</ULink></li>
              <li><ULink to="/about">About</ULink></li>
              <li>
                <UButton>Prova</UButton>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </UContainer>
  </div>
  <UContainer>
    <slot />
  </UContainer>
</template>

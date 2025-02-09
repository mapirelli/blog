<template>
  <div>
    <header class="bg-white dark:bg-gray-950 sticky top-0">
      <UContainer>
        <div class="flex justify-between py-6">
          <div class="flex gap-2 items-center">
            <UAvatar src="img/avatar.png" size="xl" />
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
                  <UButton icon="i-lucide-sun" variant="subtle">Prova</UButton>
                </li>
                <li><ColorMode /></li>
              </ul>
            </nav>
          </div>
        </div>
      </UContainer>
    </header>
    <main>
      <UContainer>
        <slot />
      </UContainer>
    </main>
  </div>
</template>

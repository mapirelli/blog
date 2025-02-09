<template>
  <div class="bg-white sticky top-0">
    <div class="mx-auto container">
      <div class="flex justify-between py-6">
        <div class="font-semibold text-lg text-(--ui-primary)">
          Mariano Pirelli Villanueva
        </div>
        <div class="font-semibold text-lg">
          <nav>
            <ul class="flex gap-4">
              <li><ULink to="/">Home</ULink></li>
              <li><ULink to="/now">Now</ULink></li>
              <li><ULink to="/blog">Blog</ULink></li>
              <li><ULink to="/about">About</ULink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto container">
    <slot />
  </div>
</template>

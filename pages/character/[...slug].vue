<template>
  <main class="grid grid-cols-12">
    <nav class="col-span-2">
      <ContentNavigation v-slot="{navigation}" :query="queryContent('character')">
        <ul class="list-none">
          <li v-for="link of navigation[0].children" :key="link._path">
            <NuxtLink :to="link._path" class="no-underline text-blue-500 leading-relaxed font-extrabold hover:underline">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
    <ContentDoc>
      <template #default="{ doc }">
        <div class="col-span-6 shadow-md border-solid rounded-xl border-bluegray px-5 pb-5 w-10/12-md m-auto font-mono tracking-widest">
          <ContentRenderer :value="doc" :components="components" />
          <!-- <NuxtImg src="logo.png" class="opacity-50 float-right" /> -->
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup>
const components = {
  h1: 'CustomTitle',
  p: 'CustomParagraph'
}
</script>
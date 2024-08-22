<template>
  <main class="grid grid-cols-12">
    <nav class="col-span-2">
      <ContentNavigation v-slot="{ navigation }" :query="queryContent('character')">
        <ul class="list-none">
          <li v-for="link of navigation[0].children" :key="link._path">
            <NuxtLink
              :to="link._path"
              class="font-extrabold leading-relaxed text-blue-500 no-underline hover:underline"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
    <ContentDoc>
      <template #default="{ doc }">
        <div
          class="border-bluegray w-10/12-md col-span-6 m-auto rounded-xl border-solid px-5 pb-5 font-mono tracking-widest shadow-md"
        >
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

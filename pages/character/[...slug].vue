<template>
  <main class="grid min-h-[100vh] grid-cols-12 pt-4">
    <aside class="col-span-2 pl-3">
      <ContentNavigation v-slot="{ navigation }" :query="queryContent('character')">
        <ul class="space-y-6 lg:space-y-2">
          <li v-for="link of navigation[0].children" :key="link._path">
            <NuxtLink
              :to="link._path"
              class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
              :class="[
                'border-l',
                currentRoute === link._path
                  ? 'border-slate-400 dark:border-slate-500'
                  : 'border-transparent'
              ]"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </aside>
    <div class="col-span-8">
      <ContentDoc>
        <template #default="{ doc }">
          <ContentRenderer :value="doc" :components="components" />
        </template>
      </ContentDoc>
    </div>
  </main>
</template>

<script setup>
const currentRoute = useRoute().path

const components = {
  h1: 'custom-title',
  p: 'custom-paragraph'
}
</script>

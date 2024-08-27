<template>
  <main class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
    <div class="lg:col-span-2">
      <aside
        class="hidden overflow-y-auto py-8 lg:sticky lg:top-[--header-height] lg:-mx-4 lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:px-4"
      >
        <ContentNavigation v-slot="{ navigation }" :query="queryContent('character')">
          <ul class="space-y-6 lg:space-y-2">
            <li v-for="link of navigation[0].children" :key="link._path">
              <NuxtLink
                :to="link._path"
                class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
                :class="[
                  currentRoute === link._path
                    ? 'border-slate-400 text-slate-400 dark:border-slate-500'
                    : ''
                ]"
              >
                {{ link.title }} {{ currentRoute === link._path }}
              </NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </aside>
    </div>
    <div class="lg:col-span-8">
      <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
        <div class="lg:col-span-8">
          <ContentDoc tag="article">
            <template #default="{ doc }">
              <ContentRenderer :value="doc" :components="components" />
              <br />
              <br />

              列出:{{'<ContentRenderer :value="doc" :components="components" />'}}
              <br />
              {{ doc }}
            </template>
          </ContentDoc>
        </div>
        <div class="order-first lg:order-last lg:col-span-2">
          <nav
            class="bg-background/75 sticky top-[--header-height] -mx-4 max-h-[calc(100vh-var(--header-height))] overflow-y-auto px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-4 lg:px-4"
          >
            <div class="truncate text-sm/6 font-semibold">{{ page.title }}</div>
            <ul v-for="(content, idx) in toc" :key="idx" class="hidden space-y-1 lg:block">
              <li class="hidden space-y-1 lg:block">
                <a
                  class="block truncate text-sm/6"
                  :href="`#${content.id}`"
                  :class="{ 'text-primary': content.id === currentSection }"
                >
                  {{ content.text }}
                </a>
                <template v-if="content.children">
                  <ul
                    v-for="(chid, indexchid) in content.children"
                    :key="indexchid"
                    class="hidden space-y-1 lg:block"
                  >
                    <li class="ml-3 hidden space-y-1 lg:block">
                      <a
                        class="block truncate text-sm/6 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        :class="{ 'text-primary': content.id === currentSection }"
                        :href="`#${chid.id}`"
                        >{{ chid.text }}</a
                      >
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const currentRoute = route.path
const { navigation, page, surround, globals } = useContent()
const toc = page.value?.body?.toc?.links
console.log('navigation', navigation.value)
console.log('page', page.value)
console.log('surround', surround.value)
console.log('globals', globals.value)

// 當前節點 id
const currentSection = ref('')
const updateCurrentSection = () => {
  const headers = document.querySelectorAll('h1, h2, h3')
  let activeSection = ''
  const buffer = 200
  headers.forEach((header) => {
    const rect = header.getBoundingClientRect()
    if (rect.top <= buffer && rect.bottom > 0) {
      activeSection = header.id
    }
  })
  currentSection.value = activeSection
}
onMounted(() => {
  window.addEventListener('scroll', updateCurrentSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateCurrentSection)
})
const components = {
  h1: 'custom-title',
  h2: 'custom-description',
  h5: 'date-display',
  p: 'custom-paragraph'
}
</script>

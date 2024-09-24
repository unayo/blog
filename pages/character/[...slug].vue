<template>
  <main class="flex flex-col pt-16 lg:grid lg:grid-cols-10 lg:gap-8">
    <div class="lg:col-span-2">
      <aside
        class="hidden overflow-y-auto lg:sticky lg:top-[--header-height] lg:-mx-4 lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:px-4"
      >
        <ContentNavigation v-slot="{ navigation }" :query="queryContent('character')">
          <ul class="space-y-6 lg:space-y-2">
            <li v-for="link of navigation[0].children" :key="link._path">
              <NuxtLink
                :to="link._path"
                class="hover:border-l-1 -ml-px block border-l-4 border-transparent pl-4 hover:border-slate-400 hover:text-slate-900"
                :class="[
                  currentRoute === link._path
                    ? 'border-indigo-500'
                    : 'border-slate-400 text-slate-700'
                ]"
              >
                {{ link.title }}
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
            </template>
          </ContentDoc>
        </div>
        <div class="order-first lg:order-last lg:col-span-2">
          <nav
            class="bg-background/75 sticky top-[--header-height] -mx-4 max-h-[calc(100vh-var(--header-height))] overflow-y-auto px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-4 lg:px-4"
          >
            <div class="truncate text-sm/6 font-semibold">{{ page.title }}</div>
            <ul v-for="(content, idx) in toc" :key="idx" class="hidden space-y-1 lg:block">
              <li class="hidden space-y-1 lg:block" @click="moveto(content.id)">
                <p>{{ content.text }}</p>

                <template v-if="content.children">
                  <ul
                    v-for="(chid, indexchid) in content.children"
                    :key="indexchid"
                    class="hidden space-y-1 lg:block"
                  >
                    <li class="ml-3 hidden space-y-1 lg:block" @click="moveto(chid.id)">
                      <p>{{ chid.text }}</p>
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
const { page } = useContent()
const toc = page.value?.body?.toc?.links

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
const moveto = (id) => {
  document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
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

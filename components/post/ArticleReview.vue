<template>
  <div>
    <ContentList :query="query" v-slot="{ list }">
      <div
        v-for="article in list"
        :key="article._path"
        class="mb-3 max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md"
      >
        <div class="mt-2">
          <a class="text-2xl font-bold text-gray-700 hover:underline" :href="article?._path">
            {{ article?.title }}
          </a>
          <p class="mt-2 text-gray-600">{{ article?.body.children[1].children[0].value }}</p>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <a class="text-blue-500 hover:underline" href="#">Read more</a>
        </div>
      </div>
    </ContentList>
  </div>
</template>

<script setup></script>

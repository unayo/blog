<template>
  <div class="max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
    <div class="flex items-center justify-between">
      <span class="font-light">{{ new Date(data.date).toLocaleDateString('en-CA') }}</span>
      <a class="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 hover:bg-gray-500" href="#">{{
        data.tag
      }}</a>
    </div>
    <div class="mt-2">
      <a class="text-2xl font-bold text-gray-700 hover:underline" href="#">{{ data.title }}</a>
      <!-- <p class="mt-2">{{ data.body }}</p> -->
      <ContentDoc query="character">
    <template #default="{ doc }">
      <div v-if="doc">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc.body" />
      </div>
      <div v-else>
        <p>No document found.</p>
      </div>
    </template>
  </ContentDoc>
    </div>
    <div class="mt-4 flex items-center justify-between">
      <a class="text-blue-500 hover:underline" href="#">Read more</a>
      <div>
        <a class="flex items-center" href="#">
          <img
            class="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
            :src="data.image"
            alt="avatar"
          />
          <h1 class="font-bold text-gray-700 hover:underline">{{ data.userName }}</h1>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

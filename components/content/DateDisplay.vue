<template>
  <div>
    <h5 v-if="date" class="mb-4 mt-4 text-center text-sm opacity-60">
      <time :datetime="date">{{ new Date(date).toLocaleDateString('en-CA') }}</time>
    </h5>
  </div>
</template>

<script setup>
const { page } = useContent()
const date = computed(() => page.value?.date)
</script>

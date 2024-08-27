<template>
  <USelectMenu
    selected-icon="i-heroicons-hand-thumb-up-solid"
    class="w-full lg:w-48"
    placeholder="Select a tag"
    :options="data"
    :model-value="data[0]"
  />
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default() {
      return []
    }
  }
})
</script>

<template>
  <h2 class="mb-4 mt-4 text-center text-xl opacity-60">
    <slot />
  </h2>
</template>

<script setup>
defineProps({
  date: String
})
</script>

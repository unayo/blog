<script setup>
const current = defineModel('current')
const totalpage = defineModel('totalpage')
</script>

<template>
  <div>
    <UPagination
      :total="totalpage"
      :model-value="current"
      :active-button="{ variant: 'outline' }"
      :inactive-button="{ color: 'gray' }"
      :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }"
    >
      <template #prev="{ onClick }">
        <UTooltip text="Previous page">
          <UButton
            icon="i-heroicons-arrow-small-left-20-solid"
            color="primary"
            :ui="{ rounded: 'rounded-full' }"
            class="me-2 rtl:[&_span:first-child]:rotate-180"
            @click="onClick"
          />
        </UTooltip>
      </template>

      <template #next="{ onClick }">
        <UTooltip text="Next page">
          <UButton
            icon="i-heroicons-arrow-small-right-20-solid"
            color="primary"
            :ui="{ rounded: 'rounded-full' }"
            class="ms-2 rtl:[&_span:last-child]:rotate-180"
            @click="onClick"
          />
        </UTooltip>
      </template>
    </UPagination>
  </div>
</template>

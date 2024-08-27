<template>
  <div class="mx-auto flex max-w-sm flex-col rounded-lg px-8 py-6 text-gray-700 shadow-md">
    <ContentNavigation v-slot="{ navigation }" :query="queryContent('character')">
      <div class="flex items-center justify-center gap-2">
        <template
          v-for="(tag, idx) in navigation[0].children[navigation[0].children.length - 1].tags"
          :key="idx"
        >
          <div class="rounded bg-gray-600 px-2 py-1 text-sm text-green-100 hover:bg-gray-500">
            {{ tag }}
          </div>
        </template>
      </div>
      <div class="mt-4 flex flex-wrap items-center justify-between">
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
            class="h-8 w-8 rounded-full object-cover"
            alt="avatar"
          />
          <a
            class="mx-3 text-sm text-gray-700 hover:underline"
            :href="navigation[0].children[navigation[0].children.length - 1]._path"
          >
            {{ navigation[0].children[navigation[0].children.length - 1].title }}
          </a>
        </div>
        <span class="text-sm font-light">
          {{
            new Date(
              navigation[0].children[navigation[0].children.length - 1].date
            ).toLocaleDateString('en-CA')
          }}
        </span>
      </div>
    </ContentNavigation>
  </div>
</template>

<script setup></script>

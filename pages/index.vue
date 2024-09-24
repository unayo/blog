<template>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto my-8 flex justify-between">
      <div class="w-full lg:w-8/12">
        <div class="flex items-center justify-between">
          <h1 class="mb-4 text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
          <PostElFilter />
        </div>
        <PostArticleReview :data="post"></PostArticleReview>
      </div>
      <div class="-mx-8 hidden w-4/12 lg:block">
        <div class="px-8">
          <h1 class="mb-4 text-xl font-bold text-gray-700">Authors</h1>
          <PostUserList />
        </div>
        <div class="mt-10 px-8">
          <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
          <PostCategoriesList />
        </div>
        <div class="mt-10 px-8">
          <h1 class="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
          <PostArticleRecent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

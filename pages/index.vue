<template>
  <div class="px-6 py-8">
    <div class="container mx-auto flex justify-between">
      <div class="w-full lg:w-8/12">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
          <PostElFilter />
        </div>
        <div v-for="post in posts" :key="post.id" class="mt-6">
          <PostArticleReview :data="post"></PostArticleReview>
        </div>
        <PostElPagination class="mt-8" />
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

<script setup>
const posts = reactive([
  {
    id: 1,
    date: 'Jun 1, 2020',
    tag: 'Laravel',
    title: 'Build Your New Idea with Laravel Freamwork.',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
    userName: 'Alex John'
  },
  {
    id: 2,
    date: 'mar 4, 2019',
    tag: 'Design',
    title: 'Accessibility tools for designers and developers',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
    image:
      'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
    userName: 'Jane Doe'
  }
])
</script>

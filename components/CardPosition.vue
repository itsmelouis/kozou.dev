<template>
  <div
    class="flex flex-col p-4 bg-white/10 dark:bg-black/10 rounded-md border max-w-[50%] h-auto border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 cursor-pointer"
  >
    <a :href="link" target="_blank"
      ><h1 class="font-semibold mb-1">{{ title }}</h1>
      <p class="text-sm text-gray-800/70 dark:text-gray-100/70 mb-6">{{ description }}</p>
      <div class="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
        <div class="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          {{ position }}
        </div>
      </div></a
    >
  </div>
</template>

<script>
export default {
  name: 'CardPosition',
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>

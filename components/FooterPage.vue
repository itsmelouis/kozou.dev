<template>
  <div
    class="w-full flex flex-col items-start border-t-2 border-slate-800 px-4 py-8 dark:border-opacity-50 mt-8"
  >
    <h1 class="text-black dark:text-white/50 text-2xl font-semibold">Kozou</h1>
    <h2 class="text-black/60 dark:text-white/30 text-base">Web developper • {{ year }}</h2>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

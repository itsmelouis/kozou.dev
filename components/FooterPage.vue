<template>
  <div class="w-full flex flex-col items-start border-t-2 border-slate-800 px-4 py-8 dark:border-opacity-50 mt-8 mb-24">
    <h1 class="text-black dark:text-white/50 text-2xl font-semibold">Kozou</h1>
    <div class="flex flex-row justify-between items-center gap-5 w-full">
      <h2 class="text-black/60 dark:text-white/30 text-base">Web developper • {{ year }}</h2>
      <h2 class="text-black/60 dark:text-white/30 text-base text-right">
        Credit for design goes to
        <a href="https://github.com/cnrad/cnrad.dev/" rel="noreferrer"
          class="border-b pb-[1px] border-black/60 dark:border-white/30 transition duration-300 hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white">Cnrad</a>
      </h2>
    </div>
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

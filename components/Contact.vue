<template>
  <div
    class="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen">
    <Header />
    <div class="mt-32 w-[80%] md:w-[45rem] ease-out duration-300">
      <h1 class="font-bold text-4xl md:text-5xl">Contact</h1>

    </div>
  </div>
</template>

      <script>
      import Header from './Header.vue'

      export default {
        name: 'ContactView',
        components: {
          Header
        }
      }
      </script>

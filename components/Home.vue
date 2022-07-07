<template>
  <div
    class="flex flex-row justify-center w-full h-full min-h-screen text-black dark:text-white bg-white dark:bg-[#0d131f]"
  >
    <Header />
    <div class="mt-24 dark:bg-[#0d131f]">
      <h1 class="mb-6 text-3xl text-center font-extrabold">Home</h1>
      <GitHubCardVue />
      <GithubProjectCardVue />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import GitHubCardVue from './GitHubCard.vue'
import GithubProjectCardVue from './GithubProjectCard.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    GitHubCardVue,
    GithubProjectCardVue
  }
}
</script>

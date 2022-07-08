<template>
  <div
    class="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen"
  >
    <Header />
    <div class="mt-32 w-[80%] md:w-[45rem] transition ease-in-out delay-150">
      <div>
        <h1 class="mb-6 text-5xl font-extrabold">Hiya, I'm Kozou!</h1>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mb-12">
          I'm a french student in web development
        </p>
      </div>
      <GitHubCardVue />
      <GithubProjectCardVue />
      <CardPositionVue
        link="https://premid.app/"
        title="PreMiD"
        description="PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
        position="Technical Support - Moderator"
      />
      <FooterPageVue />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import GitHubCardVue from './GitHubCard.vue'
import GithubProjectCardVue from './GithubProjectCard.vue'
import CardPositionVue from './CardPosition.vue'
import FooterPageVue from './FooterPage.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    GitHubCardVue,
    GithubProjectCardVue,
    CardPositionVue,
    FooterPageVue
  }
}
</script>

<template>
  <div
    class="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen"
  >
    <Header />
    <div class="mt-32 w-[80%] md:w-[45rem] transition ease-in-out delay-150">
      <div>
        <h1 class="mt-18 font-bold text-4xl md:text-5xl mb-4">Hiya, I'm Kozou!</h1>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mb-12">
          I'm a french student in IT. I'm currently studying in a BTS SIO in order to proudly become
          a full-stack web developer. I've been studied for 1 year now and I still have so much to
          learn!
        </p>
      </div>
      <div>
        <h2 class="font-medium text-3xl mb-4">Technologies</h2>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide">
          I barely know few languages but fair enough to build a simple and friendly web site.
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

<template>
  <div
    class="transition-all duration-200 text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen"
  >
    <Header />
    <div class="mt-32 w-[80%] md:w-[45rem]">
      <div>
        <div class="flex flex-row items-center mt-18 mb-4">
          <h1 class="font-bold text-4xl md:text-5xl">Hiya, I'm Kozou!</h1>
          <p class="font-bold text-4xl md:text-5xl">👋</p>
        </div>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mb-12">
          I'm a french student in IT. I'm currently studying in a BTS SIO in order to proudly become
          a full-stack web developer. I've been studied for 1 year now and I still have so much to
          learn!
        </p>
      </div>
      <div>
        <h2 class="font-medium text-3xl mb-4">Technologies 💻</h2>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mb-12">
          I barely know few languages and tools but fair enough to build a simple and accessible web
          site. I mainly use frameworks and tools related to Javascript language.
        </p>
      </div>
      <div class="mb-12">
        <h2 class="font-medium text-3xl mb-4">My Projects 🌐</h2>
        <GithubProjectCardVue />
      </div>
      <div>
        <h2 class="font-medium text-3xl mb-4">Jobs 🧑‍🔧</h2>
        <CardPositionVue
          link="https://premid.app/"
          title="PreMiD"
          description="PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
          position="Technical Support - Moderator"
        />
      </div>
      <FooterPageVue />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import GithubProjectCardVue from './GithubProjectCard.vue'
import CardPositionVue from './CardPosition.vue'
import FooterPageVue from './FooterPage.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    GithubProjectCardVue,
    CardPositionVue,
    FooterPageVue
  }
}
</script>

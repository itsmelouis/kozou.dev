<template>
  <div
    class="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen">
    <Header />
    <div class="mt-32 w-[80%] md:w-[45rem] ease-out duration-300">
      <div>
        <div class="flex flex-row items-center mt-18 mb-4">
          <h1 class="font-bold text-4xl md:text-5xl">Hiya, I'm Kozou!</h1>
          <p class="font-bold text-4xl md:text-5xl">👋</p>
        </div>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mb-12">
          I'm an IT student from France. I'm now pursuing my full-stack web developer certification at a BTS SIO.
          Despite studying for a year, I still have a lot to learn!
        </p>
      </div>
      <div>
        <h2 class="font-medium text-3xl mb-4">Technologies 💻</h2>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mb-12">
          To speed up my development process and improve the quality of both my code and my projects, I employ a
          number of tools. The technologies and languages I currently use and have experience with are listed here.
        </p>
      </div>
      <div class="mb-12">
        <h2 class="font-medium text-3xl mb-4">My Projects 🔧</h2>
        <GithubProjectCardVue />
      </div>
      <div>
        <h2 class="font-medium text-3xl mb-4">Jobs 🧑‍🔧</h2>
        <CardPositionVue link="https://premid.app/" title="PreMiD"
          description="PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
          position="Technical Support - Moderator" />
      </div>
      <div>
        <SpotifyCardVue />
      </div>
      <FooterPageVue />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import SpotifyCardVue from './SpotifyCard.vue'
import GithubProjectCardVue from './GithubProjectCard.vue'
import CardPositionVue from './CardPosition.vue'
import FooterPageVue from './FooterPage.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    SpotifyCardVue,
    GithubProjectCardVue,
    CardPositionVue,
    FooterPageVue
  }
}
</script>

<template>
  <div
    class="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen"
  >
    <Header />
    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div class="mt-32 w-[80%] md:w-[45rem]">
        <div>
          <div class="flex flex-row items-center mt-18 mb-4">
            <h1 class="font-bold text-4xl md:text-5xl">Hiya, I'm Kozou! 👋</h1>
          </div>
          <p
            class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide transition-colors duration-75 mb-12"
          >
            I'm a {{ age }} years old IT student from France. I'm now pursuing my full-stack web
            developer certification at a BTS SIO. Despite studying for a year, I still have a lot to
            learn!
          </p>
        </div>
        <div>
          <h2 class="font-medium text-3xl mb-4">Technologies 💻</h2>
          <p
            class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mb-4 transition-colors duration-75"
          >
            To speed up my development process and improve the quality of both my code and my
            projects, I employ a number of tools. The technologies and languages I currently use and
            have experience with are listed here.
          </p>
          <ToolsIconsVue />
        </div>
        <div class="mb-12">
          <h2 class="font-medium text-3xl mb-4">My Projects 🔧</h2>
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
        <div>
          <SpotifyCardVue />
        </div>
        <FooterPageVue />
      </div>
    </transition>
  </div>
</template>

<script>
import Header from './Header.vue'
import ToolsIconsVue from './ToolsIcons.vue'
import SpotifyCardVue from './SpotifyCard.vue'
import GithubProjectCardVue from './GithubProjectCard.vue'
import CardPositionVue from './CardPosition.vue'
import FooterPageVue from './FooterPage.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    ToolsIconsVue,
    SpotifyCardVue,
    GithubProjectCardVue,
    CardPositionVue,
    FooterPageVue
  },
  data() {
    return {
      age: null
    }
  },
  created() {
    const currentDate = new Date()
    this.age = Math.floor(Math.abs(new Date('04/15/2003') - currentDate) / (1000 * 3600 * 24 * 365))
  }
}
</script>

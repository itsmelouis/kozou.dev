<template>
  <div
    class="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen">
    <Header />
    <div class="mt-32 w-[80%] md:w-[45rem]">
      <div>
        <div class="flex flex-row justify-between items-center gap-5 w-full mb-5">
          <h2 class="font-bold text-3xl">Let's chat 🗯️</h2>
          <DiscordProfile />
        </div>
        <p class="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide mb-4 transition-colors duration-75">
          A query, a project, or suggestions? Please feel free to get in touch with me through my social media
          profiles
          or by using the form below. I'll do my best to respond as quickly as I can.
        </p>

        <p class="text-black/50 dark:text-white/50 text-sm mb-10">I apologize for the inconvenience, but the form is
          not currently operational: Please get in touch with me on social media.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-20">
        <ContactFormVue />
        <SocialLink />
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
import ContactFormVue from './ContactForm.vue'
import FooterPageVue from './FooterPage.vue'
import SocialLink from './SocialLink.vue'
import SpotifyCardVue from './SpotifyCard.vue'
import DiscordProfile from './DiscordProfile.vue'

export default {
  name: 'ContactView',
  components: {
    Header,
    ContactFormVue,
    FooterPageVue,
    SocialLink,
    SpotifyCardVue,
    DiscordProfile
  }
}
</script>

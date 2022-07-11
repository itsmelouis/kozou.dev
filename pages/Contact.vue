<template>
  <div :class="dark ? 'dark' : 'light'">
    <ContactVue />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactVue from '../components/Contact.vue'

export default {
  name: 'ContactView',
  components: {
    ContactVue
  },
  head() {
    return {
      title: 'Contact | kozou.dev'
    }
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>

<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>

<template>
  <v-app-bar app clipped-left color="amber lighten-2" dense fixed>
    <v-app-bar-nav-icon @click="onClick()" />

    <v-toolbar-title>
      <nuxt-link to="/" class="text--secondary text-decoration-none">
        <HeaderTitleText :element="getTitleElement" :text="siteTitle" />
      </nuxt-link>
    </v-toolbar-title>

    <!-- headerのcontainer -->
    <slot />
  </v-app-bar>
</template>

<script>
const SITE_TITLE = 'App'

export default {
  computed: {
    getTitleElement () {
      return this.$route.path === '/' ? 'h1' : 'p'
    },

    siteTitle: () => SITE_TITLE
  },

  methods: {
    onClick () {
      return this.$emit('click')
    }
  }
}
</script>

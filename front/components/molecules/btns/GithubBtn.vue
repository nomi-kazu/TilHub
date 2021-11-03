<template>
  <v-btn
    :dark="dark"
    :href="href"
    :to="to"
    color="#171515"
    class="white--text"
    @click="onClick"
  >
    <GithubIcon />
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: undefined
    },
    href: {
      type: String,
      default: undefined
    }
  },

  methods: {
    onClick () {
      return this.$emit('click')
    }
  }
}
</script>

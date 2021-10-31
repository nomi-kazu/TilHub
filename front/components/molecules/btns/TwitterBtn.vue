<template>
  <v-btn
    :dark="dark"
    :href="href"
    :to="to"
    @click="onClick"
  >
    <TwitterIcon />
  </v-btn>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: true
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

<template>
  <v-btn
    depressed
    color="blue accent-4"
    class="btn"
    :to="to"
    :large="large"
    @click="onClick"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: '#'
    },

    large: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClick () {
      return this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    color: white;
  }
</style>

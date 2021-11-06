<template>
  <v-btn
    depressed
    color="yellow lighten-3"
    class="btn"
    :to="to"
    :large="large"
    :disabled="disabled"
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
      default: undefined
    },
    large: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    color: white;
  }
</style>

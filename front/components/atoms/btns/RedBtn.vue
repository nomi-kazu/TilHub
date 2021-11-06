<template>
  <v-btn
    depressed
    color="red lighten-2"
    class="btn"
    :to="to"
    :large="large"
    :disabled="disabled"
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
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    color: white;
  }
</style>

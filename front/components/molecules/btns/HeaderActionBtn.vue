<template>
  <client-only>
    <v-btn class="header-btn" large nuxt text :to="to" @click="onClick()" v-text="text"  />
  </client-only>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'ログイン'
    },

    to: {
      type: [String, Object],
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

<style lang="scss" scoped>
.header-btn {
  font-size: 1.1rem;
}
</style>

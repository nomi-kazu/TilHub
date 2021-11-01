<template>
  <HeaderContainer @click="onClick">
    <v-spacer />
    <keep-alive>
      <component :is="getComponentName" />
    </keep-alive>
  </HeaderContainer>
</template>

<script>
export default {
  computed: {
    getComponentName () {
      return this.isLogin ? 'LoginHeader' : 'GuestHeader'
    },
    isLogin () {
      return this.$store.getters['authentication/isAuthenticated']
    }
  },

  methods: {
    onClick () {
      return this.$emit('click')
    }
  }
}
</script>

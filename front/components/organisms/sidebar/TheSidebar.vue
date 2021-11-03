<template>
  <SidebarContainer v-model="drawer">
    <keep-alive>
      <component :is="getComponentName" />
    </keep-alive>
  </SidebarContainer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isLogin () {
      return this.$store.getters['authentication/isAuthenticated']
    },

    getComponentName() {
      return this.isLogin ? 'LoginSidebar' : 'GuestSidebar'
    },

    onInput (newVal) {
      return this.$emit('input', newVal)
    }
  }
}
</script>

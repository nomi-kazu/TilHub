<template>
  <BaseSidebarListItem :data="newData" />
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  computed: {
    newData () {
      const data = this.data
      data.to = `/${this.username}`
      return data
    },

    username () {
      // usernameにする
      return this.$store.getters["authentication/uid"]
    }
  }
}
</script>
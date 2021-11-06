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
      if(this.$store.getters["authentication/accessToken"]) {
        data.to = `/${this.username}`
      } else {
        data.to = '/about'
      }
      return data
    },

    username () {
      return this.$store.getters["authentication/username"]
    }
  }
}
</script>
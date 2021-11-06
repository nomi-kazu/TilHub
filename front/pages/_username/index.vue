<template>
  <div>
    <UsernameIndexTemplate :user-info="userInfo" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params, store }) {
    try {
      // const { data } = await $axios.$get(`/api/v1/users/#{params}`)
      const { data } = await $axios.$get(`/api/v1/users/${store.getters["authentication/id"]}`)
      return { userInfo: data }
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    username () {
      return this.$route.params.username
    }
  }
}
</script>

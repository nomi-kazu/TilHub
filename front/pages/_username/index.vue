<template>
  <div>
    <UsernameIndexTemplate :user-info="userInfo" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    try {
      const { data } = await $axios.$get('/api/v1/users/1')
      console.log(data)
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

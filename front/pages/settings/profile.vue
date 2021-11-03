<template>
  <div>
    <SettingProfileTemplate :info="info" @save="save" />
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',

  async asyncData({ $axios, params }) {
    try {
      const { data } = await $axios.$get('/api/v1/auth/edit')
      return { info: data }
    } catch (e) {
      console.error(e)
    }
  },

  methods: {
    async save (userInfo) {
      try {
        await this.$axios.$put('/api/v1/auth', {
          name: userInfo.name,
          profile: userInfo.profile,
          address: userInfo.address
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

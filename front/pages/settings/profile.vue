<template>
  <div>
    <SettingProfileTemplate :info="info" />
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
  }
}
</script>

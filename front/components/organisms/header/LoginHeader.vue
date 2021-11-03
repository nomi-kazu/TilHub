<template>
  <div>
    <!-- ログインしたユーザーに見せるもの -->
    <HeaderActionBtn text="ログアウト" @click="logout" />
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('authentication/logout')

        this.$router.push('/signin')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

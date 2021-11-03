<template>
  <div>
    <SignupTemplate @signup="signup" />
  </div>
</template>

<script>
export default {
  methods: {
    async signup (userInfo) {
      try {
        await this.$axios.post('/api/v1/auth', {
          email: userInfo.email,
          password: userInfo.password
        })

        this.$router.push('/user/confirm')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<template>
  <v-card class="d-flex flex-column align-center justify-center mx-auto" width="500" height="350">
    <SignupForm @signup="signup" />
  </v-card>
</template>

<script>
export default {
  methods: {
    signup (userInfo) {
      this.$emit('signup', userInfo)
    }
  }
}
</script>

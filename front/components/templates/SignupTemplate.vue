<template>
  <OneColumnContainer>
    <h1 class="mb-7">新規登録</h1>

    <SignupCard @signup="signup" />
  </OneColumnContainer>
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

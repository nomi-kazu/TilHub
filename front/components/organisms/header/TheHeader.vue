<template>
  <HeaderContainer>
    <CommonHeader>
      <GuestHeader />

      <LoginHeader />
    </CommonHeader>
  </HeaderContainer>
</template>

<script>
export default {
  computed: {
    isLogin () {
      // TODO: Login済みか判定
      return false
    },
    isGuset () {
      // TODO: Loginしていないか判定
      return true
    }
  }
}
</script>

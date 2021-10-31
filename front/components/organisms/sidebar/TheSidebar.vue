<template>
  <SidebarConatiner>
    <GuestHeader v-if="isGuest" />

    <LoginHeader v-if="isLogin" />
  </SidebarConatiner>
</template>

<script>
export default {
  computed: {
    isLogin () {
      // TODO: Login済みかどうかの判定
      return false
    },
    isGuest () {
      // TODO: Guestかどうかの判定
      return true
    }
  }
}
</script>

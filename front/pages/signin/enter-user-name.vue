<template>
  <div>
    <SigninEnterusernameTemplate @submit="updateUsername" />
  </div>
</template>

<script>
export default {
  // middleware: 'authenticated',

  // methods: {
  //   async updateUsername (userName) {
  //     try {
  //       console.log("submit")
  //       // この部分の処理はまだ確認していない。確認メールのURLのリダイレクトが変更されたら確認する
  //       await this.$axios.put('/api/v1/auth', {
  //         username: userName,
  //       })
  //       this.$router.push('/settings/profile')
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  // }
}
</script>

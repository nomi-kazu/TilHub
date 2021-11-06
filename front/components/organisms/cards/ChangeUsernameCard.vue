<template>
  <v-card class="d-flex flex-column justify-center align-center mx-auto" width="500" height="300">
    <p class="mb-5">ユーザーIDを入力してください</p>
    <p class="mb-5">※半角英数字とアンダーバー(_)のみ使用可能です。</p>

    <ChangeUsernameForm @submit="onSubmit" />
  </v-card>
</template>

<script>
export default {
  methods: {
    onSubmit (userName) {
      this.$emit('submit', userName)
    }
  }
}
</script>

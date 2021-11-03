<template>
  <v-form ref="form">
    <EmailTextField :value="email" @input="setEmailValue" />
    <PasswordTextField :value="password" @input="setPasswordValue" />
    <p class="mb-6">※半角英数字のみ使用可能です</p>

  <div class="text-center">
    <OrangeBtn type="submit" :disabled="!isValid" @click="onClick">
      新規登録
    </OrangeBtn>
  </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    isValid: false,
    password: '',
    email: '',
    error: []
  }),

  watch: {
    email (e) {
      this.isValid = this.$refs.form.validate()
    },
    password (e) {
      this.isValid = this.$refs.form.validate()
    } 
  },

  methods: {
    onClick () {
      const userInfo = { email: this.email, password: this.password }
      this.$emit('signup', userInfo)
    },

    setEmailValue (newVal) {
      this.email = newVal
    },

    setPasswordValue (newVal) {
      this.password = newVal
    }
  }
}
</script>

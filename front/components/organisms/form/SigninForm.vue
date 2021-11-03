<template>
  <v-form ref="form" @submit.prevent="login">
    <EmailTextField :value="email" @input="setEmailValue" />
    <PasswordTextField :value="password" @input="setPasswordValue" />

    <div class="text-center">
      <OrangeBtn type="submit" :disabled="!isValid" @click="login">
        ログイン
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
    async login (e) {
      try {
        await this.$store.dispatch('authentication/login', {
          email: this.email,
          password: this.password
        })

        this.$router.push(`/user/${this.$store.getters['authentication/id']}`)
      } catch (e) {
        console.log(this.formError)
      }
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

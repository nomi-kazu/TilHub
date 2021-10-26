<template>
  <v-app>
    <v-card width="600px" class="mx-auto mt-5">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            label="メール"
          />

          <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            counter
            @click:append="showPassword = !showPassword"
          />

          <v-card-actions>
            <v-btn
              class="info"
              large
              block
              @click="login"
            >
              ログイン
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data: () => ({
    showPassword: false,
    password: '',
    email: '',
    rules: {
      required: (value) => {
        return !!value || 'Required.'
      },
      min: (value) => {
        return value.length >= 8 || 'Min 8 characters'
      }
    }
  }),
  methods: {
    async login () {
      try {
        console.log('vrav')
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        Cookie.set('access-token', this.$store.state.access_token)
        this.$router.push(`/user/${this.$store.state.id}`)
      } catch (e) {
        this.formError = e.message
        console.log(this.formError)
      }
    }
  }
}
</script>

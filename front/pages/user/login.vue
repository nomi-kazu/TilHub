<template>
  <div>
    <div class="title">
      <h2 class="main-title">
        ログイン
      </h2>
    </div>
    <v-card width="600px" class="mx-auto mt-5">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            :rules="[rules.required]"
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
              :disabled="isNotValid"
              @click="login"
            >
              ログイン
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    isNotValid: true,
    password: '',
    email: '',
    error: [],
    rules: {
      required: (value) => {
        return !!value || '入力してください'
      },
      min: (value) => {
        return value.length >= 8 || '8文字以上入力してください'
      }
    }
  }),
  watch: {
    email (e) {
      if (this.email && this.password && this.password.length >= 8) {
        this.isNotValid = false
      } else {
        this.isNotValid = true
      }
    },
    password (e) {
      if (this.email && this.password && this.password.length >= 8) {
        this.isNotValid = false
      } else {
        this.isNotValid = true
      }
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
    }
  }
}

</script>

<template>
  <v-app>
    <div class="title">
      <h2 class="main-title">ユーザ編集</h2>
    </div>

    <v-card width="600px" class="mx-auto mt-5">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="name"
            :rules="[rules.required]"
            label="名前"
          />

          <v-text-field
            v-model="email"
            :rules="[rules.required]"
            label="メール"
          />

          <v-text-field
            v-model="selfIntroduction"
            :rules="[rules.required]"
            label="プロフィール"
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
              :disabled="isNotValid"
              class="info"
              large
              block
              @click="signUp"
            >
              新規登録
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    isNotValid: true,
    name: '',
    email: '',
    password: '',
    selfIntroduction: '',
    rules: {
      required: (value) => { return !!value || '入力してください.' },
      min: (value) => { return value.length >= 8 || '８文字以上入力してください' }
    }
  }),
  watch: {
    email (e) {
      if (this.email && this.checkPassword() && this.name) {
        this.isNotValid = false
      } else {
        this.isNotValid = true
      }
    },
    password (e) {
      if (this.email && this.checkPassword() && this.name) {
        this.isNotValid = false
      } else {
        this.isNotValid = true
      }
    },
    name (e) {
      if (this.email && this.checkPassword() && this.name) {
        this.isNotValid = false
      } else {
        this.isNotValid = true
      }
    }
  }
}
</script>

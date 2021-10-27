<template>
  <v-app>
    <div class="title">
      <h2 class="main-title">
        ユーザ編集
      </h2>
      <p>{{ info }}</p>
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
            v-model="address"
            label="都道府県"
          />

          <v-textarea
            v-model="selfIntroduction"
            label="プロフィール文" />

          <v-card-actions>
            <v-btn :disabled="isNotValid"  class="info" large block>保存</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  asyncData ({ $axios, params }) {
    return $axios.$get('/api/v1/auth/edit', {
      headers:
        {
          access_token: Cookie.get('access-token'),
          client: Cookie.get('client'),
          uid: Cookie.get('uid')
        }
    })
      .then((res) => {
        return { info: res }
      })
  },
  data: () => ({
    showPassword: false,
    isNotValid: true,
    name: '',
    email: '',
    address: '',
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
  },
  mounted () {
    console.log(this.info.data.attributes.name)
    this.name = this.info.data.attributes.name
  }
}
</script>

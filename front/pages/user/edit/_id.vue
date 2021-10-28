<template>
  <div>
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
            v-model="profile"
            label="プロフィール文"
          />

          <v-card-actions>
            <v-btn
              class="info"
              large
              block
              :disabled="isNotValid"
              @click="store"
            >
              保存
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    try {
      const { data } = await $axios.$get('/api/v1/auth/edit')
      return { info: data }
    } catch (e) {
      console.error(e)
    }
  },
  data: () => ({
    showPassword: false,
    isNotValid: true,
    name: '',
    address: '',
    profile: '',
    rules: {
      required: (value) => { return !!value || '入力してください.' },
      min: (value) => { return value.length >= 8 || '８文字以上入力してください' }
    }
  }),
  watch: {
    name (e) {
      if (this.name) {
        this.isNotValid = false
      } else {
        this.isNotValid = true
      }
    }
  },
  created () {
    this.name = this.info.attributes.name
    this.profile = this.info.attributes.profile
    this.address = this.info.attributes.address
  },
  methods: {
    async store () {
      try {
        await this.$axios.put('/api/v1/auth',
          {
            name: this.name,
            profile: this.profile,
            address: this.address
          })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<template>
  <!-- validationの処理 -->
  <v-text-field
    v-model="valueModel"
    label="パスワード"
    counter
    outlined
    dense
    :rules="[rules.required, rules.min]"
    :type="showPassword ? 'text' : 'password'"
    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showPassword = !showPassword"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: undefined
    }
  },

  data: () => {
    return {
      rules: {
        required: (value) => {
          return !!value || '入力してください'
        },
        min: (value) => {
          return value.length >= 8 || '8文字以上入力してください'
        }
      },

      showPassword: false
    }
  },

  computed: {
    valueModel: {
      get () {
        return this.value
      },
      set (newVal) {
        return this.$emit('input', newVal)
      }
    }
  }
}
</script>

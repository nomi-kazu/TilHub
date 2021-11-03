<template>
  <!-- validationの処理 -->
  <v-text-field  v-model="valueModel" label="メール" :rules="[rules.required]" />
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
        }
      }
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

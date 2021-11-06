<template>
  <OneColumnContainer fluid>
    <EditMarkdown v-model="md" />
  </OneColumnContainer>
</template>

<script>
export default {
  props: {
    fileid: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: undefined
    }
  },
  computed: {
    md: {
      get() {
        return this.value
      },
      set(newVal) {
        return this.$emit('input', newVal)
      }
    }
  }
}
</script>

<template>
  <OneColumnContainer>
    <ChangeUsernameCard @submit="onSubmit" />
  </OneColumnContainer>
</template>

<script>
export default {
  methods: {
  onSubmit (userName) {
      this.$emit('submit', userName)
    }
  }
}
</script>

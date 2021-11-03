<template>
  <OneColumnContainer>
    <h1>プロフィール編集</h1>

    <SettingProfileCard :info="info" @save="save" />
  </OneColumnContainer>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: undefined
    }
  },

  methods: {
    save (userInfo) {
      this.$emit('save', userInfo)
    }
  }
}
</script>

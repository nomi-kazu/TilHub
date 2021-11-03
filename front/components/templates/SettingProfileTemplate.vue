<template>
  <OneColumnContainer>
    <h1>プロフィール編集</h1>

    <SettingProfileCard :info="info" />
  </OneColumnContainer>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: undefined
    }
  }
}
</script>

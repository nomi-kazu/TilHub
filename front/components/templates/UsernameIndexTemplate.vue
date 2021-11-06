<template>
  <TwoColumnContainer left-cols="4" right-cols="6">
    <template #left>
      <UserIntroCard :user-info="userInfo" />
    </template>

    <template #right>
      <h2>あなたのリポジトリ</h2>

      <FolderBreadcrumbs />

      <FileFolderListWithAction />
    </template>
  </TwoColumnContainer>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: undefined
    }
  }
}
</script>

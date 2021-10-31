<template>
  <TwoColumnContainer>
    <template #left>
      <UserIntroCard />
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

}
</script>

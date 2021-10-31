<template>
  <TwoColumnContainer :left-cols="8" :right-cols="4">
    <template #left>
      <ViewFileCard />
    </template>

    <template #right>
      <UserIntroCard />

      <FileFolderList />
    </template>
  </TwoColumnContainer>
</template>

<script>
export default {

}
</script>

<template>
  <TwoColumnContainer :left-cols="8" :right-cols="4">
    <template #left>
      <UserIntroCard />
    </template>

    <template #right>
      <FileFolderList />
    </template>
  </TwoColumnContainer>
</template>

<script>
export default {

}
</script>

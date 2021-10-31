<template>
  <TwoColumnContainer :left-cols="6" :right-cols="6">
    <template #left>
      <EditMarkdown />
    </template>

    <template #right>
      <ViewFileCard />

      <BlueBtn />
    </template>
  </TwoColumnContainer>
</template>

<script>
export default {

}
</script>

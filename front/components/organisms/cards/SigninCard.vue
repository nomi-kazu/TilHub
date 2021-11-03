<template>
  <v-card max-width="800" height="400" class="mx-auto pt-4">
    <v-row justify="center">
      <SigninForm class="mr-1 mr-md-6 mr-lg-10" />

      <div class="ml-1 mr-md-6 mr-lg-10">
        <p>その他のアカウント</p>
        <LoginSnsBtnGroup />
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
  .row {
    width: 100%;
    height: 100%;
  }
</style>

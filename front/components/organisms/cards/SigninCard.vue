<template>
  <v-card width="800" height="300" class="mx-auto">
    <v-row class="d-flex flex-row justify-center align-center">
      <div class="mr-10">
        <SigninForm />
      </div>

      <div class="ml-10">
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

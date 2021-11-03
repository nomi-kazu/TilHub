<template>
  <v-card class="mx-auto pt-4" max-width="800" height="400">
    <v-row justify="center">
      <SignupForm class="mr-1 mr-md-6 mr-lg-10" @signup="signup" />

      <div class="ml-1 ml-md-6 ml-lg-10">
        <p>その他のアカウント</p>
        <LoginSnsBtnGroup />
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  methods: {
    signup (userInfo) {
      this.$emit('signup', userInfo)
    }
  }
}
</script>

<style>
  .row {
    width: 100%;
    height: 100%;
  }
</style>

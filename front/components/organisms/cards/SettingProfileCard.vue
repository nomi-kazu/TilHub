<template>
  <v-card width="800" class="mx-auto pt-10 pl-6">
    <EditProfileForm :info="info" />
  </v-card>
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

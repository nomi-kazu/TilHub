<template>
  <v-card width="100%" max-width="800" class="mx-auto pt-10 px-6 pb-8">
    <EditProfileForm :info="info" @save="save" />
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: undefined
    }
  },

  methods: {
    save (userInfo) {
      this.$emit('save', userInfo)
    }
  }
}
</script>

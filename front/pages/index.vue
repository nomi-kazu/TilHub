<template>
  <div>
    <p>{{ uid }} : {{ accessToken }} : {{ isAuthenticated }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    accessToken () {
      return this.$store.getters['authentication/access_token']
    },
    isAuthenticated () {
      return this.$store.getters['authentication/isAuthenticated']
    },
    uid () {
      return this.$store.getters['authentication/uid']
    },
  }
}
</script>

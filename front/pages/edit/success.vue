<template>
  <div>
    <EditFileidSuccessTemplate />
  </div>
</template>

<script>
export default {
  computed: {
    fileId () {
      return this.$route.query.fileid
    }
  }
}
</script>

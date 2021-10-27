<template>
  <div>
    <p>{{ $store.state.uid }} : {{ $store.state.accessToken }} : {{ $store.state.isAuthenticated ? "true" : "false" }}</p>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data () {
    return {
      msgs: []
    }
  },
  mounted () {
    if (Cookie.get('access-token')) {
      // this.$store.state.isAuthenticated = true
    }
  },
  methods: {
  }
}
</script>

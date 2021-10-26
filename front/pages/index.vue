<template>
  <div>
    <p>{{ $store.state.uid }} : {{ $store.state.accessToken }}</p>
  </div>
</template>

<script>
// const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data () {
    return {
      msgs: []
    }
  },
  methods: {
  }
}
</script>

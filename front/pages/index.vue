<template>
  <div>
    <p>{{ $store.state.uid }} : {{ $store.state.accessToken }} : {{ $store.state.isAuthenticated }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msgs: []
    }
  }
}
</script>

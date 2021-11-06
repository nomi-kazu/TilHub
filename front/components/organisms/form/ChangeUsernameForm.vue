<template>
  <v-form  class="pos-relative">
    <UsernameTextField />
    <!-- orange-btnを使う。そのため、orange-btnのpropsにfabを追加する -->
    <v-btn
      :value="userName"
      class="next-btn" 
      width="30"
      height="30"
      fab
      outlined 
      @click="onSubmit"
      @input="setUserName"
    >
      →
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    userName: ""
  }),

  methods: {
    setUserName (newVal) {
      this.userName = newVal
    },
    onSubmit () {
      this.$emit('submit', this.userName)
    }
  }
}
</script>

<style scoped>
.next-btn {
  color: white;
  background-color: #FDCB6E;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>

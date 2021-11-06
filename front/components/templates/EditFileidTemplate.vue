<template>
  <OneColumnContainer class="pos-relative" fluid>
    <EditMarkdown v-model="md" />

    <BlueBtn class="post-btn" large @click="post">
      投稿する
    </BlueBtn>
  </OneColumnContainer>
</template>

<script>
export default {
  props: {
    fileid: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: undefined
    }
  },

  computed: {
    md: {
      get() {
        return this.value
      },
      set(newVal) {
        return this.$emit('input', newVal)
      }
    }
  },

  methods: {
    post () {
      return this.$emit('post')
    }
  }
}
</script>

<style lang="scss" scoped>
.post-btn {
  position: fixed;
  bottom: 5vh;
  right: 5vw;
}
</style>

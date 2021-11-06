<template>
  <OneColumnContainer class="pos-relative" fluid>
    <EditMarkdown v-model="md" :fileid="fileid" :is-view="isView" :subfield="isBoth" @post="post" />

    <div :class="{ 'text-right': !$device.isDesktopOrTablet }">
      <BlueBtn
        :class="{ 'post-btn' : $device.isDesktopOrTablet  }"
        large
        @click="post"
      >
        投稿する
      </BlueBtn>
    </div>
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
    },

    isBoth: {
      type: Boolean,
      default: false
    },

    isEdit: {
      type: Boolean,
      default: false
    },

    isView: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    md: {
      get () {
        return this.value
      },
      set (newVal) {
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

<template>
  <div>
    <EditFileidSBothTemplate v-if="isBoth" />

    <EditFileidSEditTemplate v-if="isEdit" />

    <EditFileidSViewTemplate v-if="isView" />
  </div>
</template>

<script>
const DEFALUT_STATUS = 'both'

export default {
  middleware: 'authenticated',

  computed: {
    fileID () {
      return this.$route.params.fileID
    },

    defaultStatus () {
      return DEFALUT_STATUS
    },

    isBoth () {
      const LABEL = 'both'
      const status = this.$route.query.status
      return status ? status === LABEL : this.defaultStatus === LABEL
    },

    isEdit () {
      const LABEL = 'edit'
      const status = this.$route.query.status
      return status ? status === LABEL : this.defalutStatus === LABEL
    },

    isView () {
      const LABEL = 'view'
      const status = this.$route.query.status
      return status ? status === LABEL : this.defalutStatus === LABEL
    }
  }
}
</script>

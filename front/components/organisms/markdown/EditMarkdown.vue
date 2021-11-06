<template>
  <div class="mavonEditor">
    <client-only>
      <mavon-editor
        v-model="md"
        font-size="16px"
        language="ja"
        :default-open="defaultOpen"
        :subfield="vSubfield"
        :toobars="markdownOption"
        @save="onSave"
      />
    </client-only>
  </div>
</template>

<script>
const desktopOption = {
  bold: true,
  italic: true,
  header: true,
  underline: true,
  strikethrough: true,
  mark: true,
  superscript: true,
  subscript: true,
  quote: true,
  ol: true,
  ul: true,
  link: true,
  imagelink: false /** 画像 */,
  code: true,
  table: true,
  readmodel: true,
  htmlcode: true,
  help: true,
  undo: true,
  redo: true,
  trash: true,
  save: true,
  navigation: true,
  alignleft: true,
  aligncenter: true,
  alignright: true,
  subfield: true,
  preview: true
}

const mobileOption = {
  bold: true,
  italic: true,
  header: true,
  underline: true,
  strikethrough: true,
  mark: true,
  superscript: true,
  subscript: true,
  quote: true,
  ol: true,
  ul: true,
  link: true,
  imagelink: false /** 画像 */,
  code: true,
  table: true,
  readmodel: false,
  htmlcode: false,
  help: true,
  undo: true,
  redo: true,
  trash: false,
  save: false,
  navigation: true,
  alignleft: true,
  aligncenter: true,
  alignright: true,
  subfield: false,
  preview: true
}

export default {
  props: {
    value: {
      type: String,
      default: undefined
    },

    isView: {
      type: Boolean,
      default: true
    },

    subfield: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      markdownOption: this.$device.isDesktopOrTablet ? desktopOption : mobileOption
    }
  },

  computed: {
    defaultOpen () {
      if (this.subfield) {
        return 'preview'
      }

      return this.isView ? 'preview' : 'edit'
    },

    md: {
      get () {
        return this.value
      },

      set (newVal) {
        return this.$emit('input', newVal)
      }
    },

    vSubfield () {
      return this.$device.isDesktopOrTablet ? this.subfield : false
    }
  },

  methods: {
    onSave () {
      return this.$emit('save')
    }
  }
}
</script>

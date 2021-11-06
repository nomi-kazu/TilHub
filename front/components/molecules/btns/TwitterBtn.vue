<template>
  <v-btn
    color="#00AEEF"
    class="white--text"
    :dark="dark"
    :href="href"
    :to="to"
    :fab="fab"
    :target="vTarget"
    :rel="rel"
    :x-small="xSmall"
    @click="onClick"
  >
    <TwitterIcon />
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    },

    to: {
      type: [String, Object],
      default: undefined
    },

    fab: {
      type: Boolean,
      default: false
    },
    
    target: {
      type: String,
      default: undefined
    },

    href: {
      type: String,
      default: undefined
    }
  },

  computed: {
    xSmall () {
      return this.fab
    },

    /**
     * targetがpropsで設定されていれば、それを返す
     * 設定されていなければ、hrefが設定されているときに、_blankを返す
     */
    vTarget () {
      if (this.target) {
        return this.target
      }
      return this.href ? '_blank' : undefined
    },

    rel () {
      return this.vTarget ? 'noopener' : undefined
    }
  },

  methods: {
    onClick () {
      return this.$emit('click')
    }
  }
}
</script>

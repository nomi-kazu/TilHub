<template>
  <BaseContainer>
    <v-row justify="center">
      <v-col :cols="leftCols">
        <slot name="left" />
      </v-col>

      <v-col :cols="rightCols">
        <slot name="right" />
      </v-col>
    </v-row>
  </BaseContainer>
</template>

<script>
export default {
  props: {
    leftCols: {
      type: Number,
      default: 8
    },

    rightCols: {
      type: Number,
      default: 4
    }
  }
}
</script>

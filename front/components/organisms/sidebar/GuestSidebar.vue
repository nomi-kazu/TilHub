<template>
  <v-list>
    <v-list-item-group color="primary">
      <component  :is="getComponentName(data)" v-for="(data, key) in datas" :key="key" :data="data" />
    </v-list-item-group>
  </v-list>
</template>

<script>
import { getDatas, importComponents, getComponentName } from '~/utils/sidebar'
const NAME = 'guest'

export default {
  components: importComponents(NAME),

  computed: {
    datas: () => getDatas(NAME),

    getComponentName() {
      return (data) => getComponentName(data)
    }
  }
}
</script>

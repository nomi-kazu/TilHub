<template>
  <v-list>
    <v-list-item-group color="primary">
      <component  :is="getComponentName(data)" v-for="(data, key) in datas" :key="key" :data="data" />
    </v-list-item-group>
  </v-list>
</template>

<script>
import SidebarService from '~/src/domain/services/sidebarService'
const NAME = 'login'
const Sidebar = new SidebarService(NAME)

export default {
  components: Sidebar.importComponents,

  computed: {
    datas: () => Sidebar.datas,

    getComponentName() {
      return (data) => Sidebar.componentName(data)
    }
  }
}
</script>

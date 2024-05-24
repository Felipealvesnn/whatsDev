<template>
  <q-page class="container full-height">

    <div>
      <ConverastionArea />
    </div>
    <div class="column" v-if="1 == 2">
    </div>
    <empty v-else />

  </q-page>
</template>

<script>
import Empty from 'src/components/Empty/Index.vue'
import ConverastionArea from 'src/components/ConverastionArea/ConverastionArea.vue'



export default {
  name: 'MainLayout',

  data() {
    return {

    }
  },
  components: {
    Empty,
    ConverastionArea
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  overflow: hidden;
  min-width: 1200px;
}
</style>

<template>
  <div class="conversation-area">
    <Header />
    <div class="card-area"></div>
  </div>


</template>

<script>
import Header from 'src/components/ConverastionArea/components/Header'
export default {
  name: 'ConverastionArea',
  components: {
    Header
  }

}
</script>
<style lang="scss" scoped>
.conversation-area {
  width: 410px;
  height: 100vh;
  background-color: #f5f5f5;
}

</style>

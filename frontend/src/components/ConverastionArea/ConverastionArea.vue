<template>
  <div class="conversation-area">
    <Header />
    <div class="card-area">
      <div class="card row items-center justify-between q-px-md" v-for="item in 20" :key="item">
        <q-avatar size="40px" class="q-mr-sm">
          <img src="https://i.pravatar.cc/40" alt="">
        </q-avatar>
        <div class="message column justify-around full-height q-pt-sm">
          <div class="row justify-between">
            <div class="column">
              <span>Felipe Alves</span>
              <span v-if="1 == 1">Nova mensagem recebida</span>
              <span v-else>veja a nossa ultima conversa</span>

            </div>
            <div class="columns items-center justify-center">
              <span>7:41</span>
            </div>
          </div>
          <q-separator></q-separator>
        </div>
      </div>
    </div>
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
.card-area {
  height: calc(100vh - 118px);
  overflow-y: auto;
}
.card{
  background-color: white;
  height: 74px;
  &:hover{
    background-color: $grey-whats;
  }
  cursor: pointer;
}
.q-avatar{
  flex-grow:0.1;
}
.message{
  flex-grow: 5;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 250px;
  span:first-child{
    font-size: 16px;
  }
  span:last-child{
    font-size: 12px;
    color: $sub-title-grey;
  }
}

</style>

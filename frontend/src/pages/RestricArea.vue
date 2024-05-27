<template>
  <q-page class="container full-height">

    <div>
      <ConverastionArea />
    </div>
    <div class="column" v-if="1 == 1">
      <TopBar title="Pessoa" />
      <ChatArea />
      <MessageBar />

    </div>
    <empty v-else />

  </q-page>
</template>

<script>
import socket  from 'src/services/socket'

import Empty from 'src/components/Empty/Index.vue'
import ConverastionArea from 'src/components/ConverastionArea/ConverastionArea.vue'
import TopBar from 'src/components/TopBar/index.vue'
import ChatArea from 'src/components/ChatArea/index.vue'
import MessageBar from 'src/components/MessageBar/index.vue'



export default {
  name: 'MainLayout',

  data() {
    return {
      users:[],
      newMessage: ''
    }
  },
  components: {
    Empty,
    ChatArea,
    ConverastionArea,
    TopBar,
    MessageBar
  },
  
  mounted() {
    this.getUsers();
  },
  created() {
    const receiver = localStorage.getItem("receiver");
    socket.on(receiver, message => {
      const arr = [];
      this.users.forEach(item => {
        if (item.id === message.user_id) {
          item.newMessage = true;
        }
        arr.push(item);
      });
      this.newMessages = message.id;
      this.users = arr;
    });
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  overflow: hidden;
  min-width: 1200px;
}
</style>

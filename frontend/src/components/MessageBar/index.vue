<template>
  <div class="message-bar row items-center">
    <div class="q-mx-md">
      <q-btn round dense unelevated icon="lar la-grin-alt" text-color="grey" size="15px" class="q-mr-sm">
      </q-btn>
      <q-btn round dense unelevated icon="las la-paperclip" text-color="grey" size="15px" class="q-mr-sm">
      </q-btn>
    </div>
    <q-input rounded outlined v-model="text" label="Digite uma mensagem" bg-color="white" class="input-message"
      @keyup.enter="sendMessage">
    </q-input>
    <q-btn round dense unelevated :icon="text !== '' ? 'send' : 'fas fa-microphone'" text-color="grey" size="13px"
      class="q-ml-sm" @click="sendMessage">
    </q-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["currentUser"],
  name: "MessageBar",
  data() {
    return {
      text: "",
      myId: localStorage.getItem("myId"),
    };
  },
  methods: {
    sendMessage() {
      console.log(this.$store)
      if (this.text !== "") {
        const newMessage = {
          id: Date.now(),  // Usando timestamp como id único
          text: this.text,
          hour: new Date().toLocaleTimeString(),
          my: true  // Presumo que as mensagens enviadas são do usuário
        };

        // Dispatching a mutation to add the new message
        this.$store.commit("addMessage", newMessage);

        // Resetting the text input after sending the message
        this.text = "";
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.message-bar {
  height: 62px;
  background-color: $grey-whats;

  .input-message {
    width: 75%;
  }
}
</style>

<template>

  <div class="chat-area">
    <div class="image full-width full-height">
      <message v-for="message in messages" :key="message.id" :text="message.text" :hour="message.hour"
        :my="message.my" />
    </div>
  </div>


</template>

<script>
import Message from 'src/components/Message/Index.vue'
import { mapState } from 'vuex';
export default {
  name: 'ChatArea',

  components: {
    Message
  },

  data() {
    return {
      messages: [
        {
          id: 1,
          text: 'Olá, tudo bem?',
          hour: '12:00',
          my: true
        },
        {
          id: 2,
          text: 'Tudo sim, e você?',
          hour: '12:01',
          my: false
        },
        {
          id: 3,
          text: 'Tudo bem também',
          hour: '12:02',
          my: true
        },
        {
          id: 4,
          text: 'Que bom',
          hour: '12:03',
          my: false
        },
        {
          id: 5,
          text: 'Vamos sair hoje?',
          hour: '12:04',
          my: true
        },
        {
          id: 6,
          text: 'Vamos sim',
          hour: '12:05',
          my: false
        },
        {
          id: 7,
          text: 'Que horas?',
          hour: '12:06',
          my: true
        },
        {
          id: 8,
          text: 'Às 20:00',
          hour: '12:07',
          my: false
        },
        {
          id: 9,
          text: 'Ok',
          hour: '12:08',
          my: true
        },
        {
          id: 10,
          text: 'Até mais',
          hour: '12:09',
          my: false
        }
      ]
    };
  },
  methods: {

  }



}


</script>




<style lang="scss" scoped>
.chat-area {
  height: calc(100vh - 59px - 62px);
  min-width: 800px;
  width: calc(100vw - 410px);
  background-color: $grey-background;

  .image {
    background-image: url('/src/assets/background.png');
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>

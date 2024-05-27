<template>
  <q-page class="row items-center justify-center">
    <div class="container  justify-center image q-pa-xl ">
      <h5>Acesse o chat</h5>
      <q-input rounded outlined v-model="email" label="
      informe o seu E-mail" bg-color="white" class="q-mb-md">

      </q-input>
      <q-btn :ripple="false" rounded color="secondary" @click="logar()" label="Acessar Chat" no-caps />
    </div>
    <q-separator vertical>


    </q-separator>

    <div class="container justify-center image q-pa-xl">
      <h5>Registre-se</h5>
      <q-input rounded outlined v-model="nome" label="Informe o seu nome" bg-color="white" class="q-mb-md" />

      <q-input rounded outlined v-model="emailSignUp" label="Informe o seu E-mail" bg-color="white" class="q-mb-md" />

      <q-btn :ripple="false" rounded color="secondary" @click="registrar" label="Registrar" no-caps />
    </div>

  </q-page>
</template>

<script>
import crypto from 'crypto';
import api from 'src/services/api'
export default {
  name: 'PageIndex',
  data() {
    return {
      email: '',
      emailSignUp: '',
      nome: ''
    }
  },
  watch: {
    email() {
    //   if (this.email != '') {
    //     this.email = "";
    //   }
    // },
    // emailSignUp() {
    //   if (this.emailSignUp != '') {
    //     this.emailSignUp = "";
    //   }
    // },
    // nome() {
    //   if (this.nome != '') {
    //     this.nome = "";
    //   }
    }
  },
  methods: {
    async logar() {
      if (this.email === '') {
        this.$q.notify('Informe usuário e senha corretamente.')
      } else {
        const response = await api.get('/userget', { params: { email: this.email } });
        this.$q.notify('Usuário logado com sucesso.');
        const receiver = crypto.createHash('md5').update(`${response.data.id}`).digest('hex');
        localStorage.setItem('receiver', receiver);
        localStorage.setItem('Myid', response.data.id);

        console.log(response.data)
        this.$router.push({ name: 'chat', params: { email: this.email } })

      }


      //this.$router.push({ name: 'chat', params: { email: this.email } })
    },
    async registrar() {
      if (this.emailSignUp === '' || this.nome === '') {
        this.$q.notify('Informe usuário e senha corretamente.')
      } else {
        const response = await api.post('/users', { email: this.emailSignUp, name: this.nome })
        this.$q.notify('Usuário cadastrado com sucesso.')
        console.log(response.data)
        this.$router.push({ name: 'chat', params: { email: this.emailSignUp } })

      }
    },
    sucesso(message, id) {
      notify({
        message: message,
        color: 'positive',
        position: 'top',
        icon: 'check'
      })
    },

  }


}
</script>

<style lang="scss" scoped>
.image {
  background-image: url('../assets/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  height: 100vh;
  width: 100%
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 48%;

  .q-btn,
  .q-input {
    width: 300px;
  }

  h5 {
    color: #444;
  }
}
</style>

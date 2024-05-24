<template>
  <q-page class="row items-center justify-center">
    <div class="container  justify-center image q-pa-xl ">
      <h5>Acesse o chat</h5>
      <q-input rounded outlined v-model="email" label="
      informe o seu E-mail" bg-color="white" class="q-mb-md">

      </q-input>
      <q-btn :ripple="false" rounded color="secondary" label="Acessar Chat" no-caps />
    </div>
    <q-separator vertical>


    </q-separator>

    <div class="container justify-center image q-pa-xl">
      <h5>Registre-se</h5>
      <q-input rounded outlined v-model="nome" label="Informe o seu nome" bg-color="white" class="q-mb-md" />

      <q-input rounded outlined v-model="emailSignUp" label="Informe o seu E-mail" bg-color="white" class="q-mb-md" />

      <q-btn :ripple="false" rounded color="secondary" label="Registrar" no-caps />
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      email: '',
      emailSignUp: '',
      nome: ''
    }
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

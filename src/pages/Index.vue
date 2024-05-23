<template>
  <q-page class="">
    <div>
      <h5>Acesse o  chat</h5>
      <q-input rounded outlined v-model="email" label="
      informe o seu E-mail" bg-color="White"
      class="q-mb-md"
      >


      </q-input>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      email: ''
    }
  }
}
</script>

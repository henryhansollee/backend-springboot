<template>
  <h1>Login</h1>
  <LoginFormComp />
  <router-link to='/'><button>Home</button></router-link>
  <router-link to='/join'><button>Join</button></router-link>
  <button>Submit</button>
</template>

<script>
import LoginFormComp from '../components/LoginComps/LoginFormComp.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginFormComp
  }
}
</script>

<style>

</style>

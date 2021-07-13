<template>
  <h1>Join</h1>
  <JoinFormComp />
  <router-link to='/'><button>Home</button></router-link>
  <router-link to='/login'><button>Login</button></router-link>
  <button>Submit</button>
</template>

<script>
import JoinFormComp from '../components/JoinComps/JoinFormComp.vue'

export default {
  name: 'JoinPage',
  components: {
    JoinFormComp
  }
}
</script>

<style>

</style>

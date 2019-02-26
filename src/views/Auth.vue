<template>
  <div class="auth">
    <form v-if="loginForm" @submit.prevent="loginUser">
      <input type="email" v-model="creds.email" placeholder="email">
      <input type="password" v-model="creds.password" placeholder="password">
      <button type="submit">Login</button>
    </form>
    <form v-else @submit.prevent="register">
      <input type="text" v-model="newUser.username" placeholder="name">
      <input type="email" v-model="newUser.email" placeholder="email">
      <input type="password" v-model="newUser.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form>
    <div @click="loginForm = !loginForm">
      <p v-if="loginForm">No account Click to Register</p>
      <p v-else>Already have an account click to Login</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'auth',
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          username: ""
        }
      }
    },
    computed: {},
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  }

</script>

<style>
  .login {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(34, 34, 34);
  }

  .icon {
    height: 5vh;
  }

  .navColor {
    background-color: #EFEFEF;
  }

  #nav a {
    color: #0e0e0e;
  }

  .headerFont {
    font-family: Happy Monkey;
  }

  #nav a.router-link-exact-active {
    color: #b80202;
  }
</style>
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="#">Neighborly</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/userDash">UserDash</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/login" v-if="!user.id">Login/Register</a>
            <a class="nav-link" @click="logout" href="#/login" v-else>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch("logout")
      },
      login() {
        this.$store.dispatch("login")
      },
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(34, 34, 34);
    font-weight: bold;
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
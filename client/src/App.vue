<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br/>
    <router-link to="/">home</router-link>
    <router-link to="/books">books</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
    name: 'app',
    components: {
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
    margin-top: 60px;
  }

  a {
    margin: 1em;
  }
</style>

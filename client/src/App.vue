<template>
  <section>
    <div class="header">
      <img id="logo" alt="Coding Berlin logo" src="./assets/logo-codingberlin.jpg">
      <h1>GraphQL<br>Meetup<br>22.11.2018</h1>
    </div>
    <div id="app">

      <div class="navigation">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'books' }">Books</router-link>
        <router-link :to="{ name: 'xkcd' }">xkcd</router-link>
        <router-link :to="{ name: 'discogs-home' }">Discogs</router-link>
      </div>
      <router-view/>
    </div>
  </section>
</template>

<script>

export default {
    name: 'app',
    components: {
    }
}
</script>

<style>
  body {
    background-color: #1d1d1b;
    color: #f19b22;
    margin-top: 10%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    text-align: center;
    margin-top: 60px;
    width: 70%;
  }

  .header {
    position: fixed;
    top: 0;
    right: 3%;
    width: 30%;
    text-align: right;
  }

  .header img {
    width: 75%;
    margin: 10px 0;
  }

  .header h1 {
    text-align: right;
    margin: 0;
    font-size: 30pt;
  }

  a {
    color: #31e9f1;
  }

  .navigation a {
    margin: 1em;
  }
</style>

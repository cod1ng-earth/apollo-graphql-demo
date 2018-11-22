<template>
  <div class="hello">
    <p>
      This is a small demo on how to build a GraphQL-based application with
      <a href="https://vuejs.org/" target="_blank">VueJs</a>,
      <a href="https://www.apollographql.com/docs/apollo-server/" target="_blank">
        Apollo server
      </a> &amp;
      <a href="https://github.com/Akryum/vue-apollo" target="_blank">
        Apollo client
      </a>.
    </p>

    <ul>
      <li>
        <strong>Books</strong>: basic demo with a simple schema on static data (JS array).
      </li>
      <li>
        <strong>xkcd</strong>: how to use a REST API as a datasource
      </li>
    </ul>
    <p>
      <a href="https://github.com/coding-berlin/apollo-graphql-demo">Github repository</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  p {
    font-size: 16pt;
  }
  ul {
    text-align: left;
    padding: 0;
    margin-left: 20%;
  }
  li {
    margin: 5px 10px;
  }
  a {
    color: #42b983;
  }
</style>

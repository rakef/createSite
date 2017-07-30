<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="template">Create your website</router-link>
      </li>
      <li>
        <router-link to="publish">Publish</router-link>  
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  padding: 10px;
  font-size: 25px;
}

a {
  text-decoration: none;
  color: #42b983;
  transition: all .3s;
  color: rgb(217, 34, 31);
  /*font-weight: bold;*/
}

a:hover {
  color: rgb(254, 166, 52);
}

button {
  cursor: pointer;
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>

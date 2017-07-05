<template>
  <div class="hello">
  <!--<img src="../assets/logo.png">-->
    <h1>{{ msg }}</h1>

  <app-header></app-header>
  </div>
</template>

<script>
import Cat from './component.templates/Cat'
import AppHeader from './component.templates/AppHeader'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Wixer!!!!!'
    }
  },
  components: { 
    Cat, 
    AppHeader
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>

<template>
  <div>
      <img src="http://thecatapi.com/api/images/get?format=src&type=jpg">
      <h3>{{ txt }}</h3>
  </div>
</template>
<script>
export default {
  props: ['txt'],
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: 300px;
  background-color: pink;
  padding: .2em;
  margin: 0;
}
img {
  height: 300px;
  float: left;
}
</style>

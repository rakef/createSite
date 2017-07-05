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
  height: 150px;
  background-color: pink;
  padding: .2em;
  margin: 0;
}
img {
  height: 150px;
  float: left;
}
</style>

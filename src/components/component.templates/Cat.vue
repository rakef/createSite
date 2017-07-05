<template>
  <div>
      <h3>{{ txt }}</h3>
      <img src="http://thecatapi.com/api/images/get?format=src&type=jpg">
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
  background-color: pink;
  padding: .2em;
  margin: 0;
}
img {
  width: 150px;
}
</style>

<template>
  <div>
      <img :src="data.url">
      <h3>{{ data.txt }}</h3>
  </div>
</template>
<script>
export default {
  props: ['data'],
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

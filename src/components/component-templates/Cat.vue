<template>
  <div>
    <a href="http://thecatapi.com">
      <img src="http://thecatapi.com/api/images/get?format=src&type=gif">
    </a>
  </div>
</template>
<script>
export default {
  name: 'cat',
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
</style>

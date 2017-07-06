<template>
  <div :style="{ backgroundColor: bgColor,
                 color: txtColor }">
      <img :src="catUrl">
      <h3>{{ cmpData.txt }}</h3>
  </div>
</template>
<script>
export default {
  props: ['cmpData'],
  data() {
    return {
      catUrl: this.cmpData.url + '&' + Date.now()
    }
  },
  computed: {
    bgColor() {return this.$store.state.userComponentsData[0].style.bgColor},
    txtColor() {return this.$store.state.userComponentsData[0].style.txtColor},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: 150px;
  padding: .2em;
  margin: 0;
}
img {
  height: 150px;
  float: left;
}
</style>

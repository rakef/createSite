<template>
  <div :style="cmpData.style">
      <edit-components :cmpId="cmpData.id"></edit-components>
      <img :src="catUrl">
      <h3>{{ cmpData.txt }}</h3>
  </div>
</template>
<script>
import editComponents from './components-edit';

export default {
  props: ['cmpData'],
  components: {
    editComponents
  },
  data() {
    return {
      catUrl: this.cmpData.url + '&' + Date.now()
    }
  },
  // what is this down here??
  // computed: {
  //   bgColor() {return this.$store.state.userComponentsData[0].style.bgColor},
  //   txtColor() {return this.$store.state.userComponentsData[0].style.txtColor},
  // }
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

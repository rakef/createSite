<template>
  <div :style="{ backgroundImage: 'url(' + cmpData.imgUrl + ')' }">
    <editComponents :cmpId="cmpData.id"></editComponents>
    <!--<img :src="cmpData.imgUrl" />-->
    <h1 contenteditable="true" @keyup="editTextContent($event)"> {{cmpData.title}}</h1>
    <p contenteditable="true">{{cmpData.subtitle}} </p>
  </div>
</template>
<script>
import editComponents from './components-edit'
export default {
  props: ['cmpData'],

  methods: {
    editTextContent(input) { //element is what the user gave me, what she wrote
      // debugger;
      console.log(input.target.value)
      this.title = inpupt.target.value;
      console.log('change title ', input.target.value)
    }
  },
  components: {
    editComponents
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: fit-content;
  background-color: pink;
  padding: .2em;
  margin: 0;
}

img {
  height: 150px;
  float: left;
}
</style>

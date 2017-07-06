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
    editTextContent(ev) { //element is what the user gave me, what she wrote
      // console.log(userTextChanges)
      this.cmpData.title = ev.target.innerText ;
      console.log('this.cmpData.title: ', this.cmpData.title)
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
  min-height: 150px; 
  background-color: pink;
  padding: .2em;
  margin: 0;
}

img {
  height: 150px;
  float: left;
}
</style>

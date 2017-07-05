<template>
  <div>
    <img :src="cmpData.imgUrl"> </img>
    <h1 contenteditable="true" @keyup="editTextContent($event)"> {{cmpData.title}}</h1>
    <p contenteditable="true">{{cmpData.subtitle}} </p>
  </div>
</template>
<script>
export default {
  props: ['cmpData'],
  // data() {
  //   return {
  //     imgUrl: 'http://perinetti.legtux.org/__template3/images/pic01.jpg',
  //     title: 'give me a title',
  //     subtitle: 'give me a subtitle'
  //   }
  // },
  methods: { 
<<<<<<< HEAD
    editTextContent(input) { //element is what the user gave me, what she wrote
      // debugger;
      console.log(input.target.value)
      this.title = inpupt.target.value ;
      console.log('change title ', input.target.value)
=======
    editTextContent(userTextChanges) { //element is what the user gave me, what she wrote
      console.log(userTextChanges)
      this.cmpData.title = userTextChanges.target.value ;
      console.log('change title ', userTextChanges.target)
>>>>>>> 416e673164bb4b36c7933e0863724ba95a33d74b
    }


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

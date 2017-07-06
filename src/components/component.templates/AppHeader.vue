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
    editTextContent(userTextChanges) { //element is what the user gave me, what she wrote
      // console.log(userTextChanges)
      this.cmpData.title = userTextChanges.target.innerHTML ;
      console.log('this.cmpData.title: ', this.cmpData.title)
    }


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

<template>
  <div>
    <img :src = "imgUrl"> </img>
  <h1 contenteditable="true" @keyup="editTextContent($event)"> {{title}}</h1>
    <p contenteditable="true">{{subtitle}} </p>
  </div>
</template>
<script>
export default {
  name: 'app-header',
  data() {
    return {
      imgUrl: 'http://perinetti.legtux.org/__template3/images/pic01.jpg',
      title: 'give me title',
      subtitle: 'give me subtitle'
    }
  },
  methods: { 
    editTextContent(input) { //element is what the user gave me, what she wrote
      // debugger;
      console.log(input.target.value)
      this.title = inpupt.target.value ;
      console.log('change title ', input.target.value)
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: 300px;
  background-color: pink;
  padding: .2em;
  margin: 0;
}
img {
  /*height: 300px;
  float: left;*/
}
</style>

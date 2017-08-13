<template>
  <div :style="cmpData.style">
    <edit-components :cmpId="cmpData.id"></edit-components>
    <!--<img :src="catUrl">-->
    <!-- <p> Cat compopnent </p> -->
    <h1 contenteditable="true">{{ cmpData.title }}</h1>
    <h2 contenteditable="true">{{ cmpData.txt }}</h2>
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
    computed: {
      detectTexColorChange() {   
              return this.$store.state.userComponentsData[compIdx].type;
      }
    },
  created(){
  console.log(this.cmpData.style)
  }

}
</script>

<style scoped>

* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
h1, h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding: 10px;
  font-weight: normal;
  text-shadow: 1px 1px 4px #222;
  margin-top: 0;
  background-color: rgba(256, 250, 250, 0.7);
  margin: 0 auto;
   border-radius: 5px; 
}

h1 {
font-size: 50px;

}
div {
  display: flex;
  flex-direction: column;
  background-image: url("http://ctfresh.com.sg/wp-content/uploads/2013/12/slider.png");
  width: 100%;
  height: 200px;
  padding: .2em;
  margin: 0;
}

img {
  height: 150px;
  float: left;
}


</style>

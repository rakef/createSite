<template>
  <div :style="cmpData.style">
    <edit-components :cmpId="cmpData.id"></edit-components>
    <!--<img :src="catUrl">-->
    
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
}
</script>

<style scoped>
h1, h2 {
color: white;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding-top: 10px;
  font-weight: normal;
  text-shadow: 1px 1px 4px #222;
  margin-top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0 auto;
  border-radius: 15px;
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

* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
}
</style>

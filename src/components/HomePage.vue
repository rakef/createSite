<template>
  <div class="HomePage" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
    <img src=""/>
    <h1>&nbsp{{ msg }}&nbsp</h1>
    <h2><a href="template">&nbspBuild a website for your farm&nbsp</a></h2>
  </div>
</template>

<script>
import Cat from './component.templates/Cat'
// import AppHeader from './component.templates/AppHeader'
export default {
  name: 'HomePage',
  data() {
    return {
      msg: 'Welcome to Farmer-builder ',
      backgroundImage:'http://c1.staticflickr.com/3/2855/9841927213_c087ecb947_k.jpg'
    }
  },
  components: {
    Cat,
    // AppHeader,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding-top: 10px;
  font-weight: normal;
  color: white;
  text-shadow: 1px 1px 4px #222;
  margin-top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  border-radius: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.HomePage {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: auto;
}

html, body {
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 4em;
}

h2 {
  margin-top: 0;
  font-size: 3em;
}

h2 a{
  color: white;
  cursor: pointer;
}

h2:hover{
    color: blue;
}
</style>
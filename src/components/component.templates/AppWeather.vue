<template>
  <section>
    <edit-components class="weather":cmpId="cmpData.id"></edit-components>
  
    <p> The weather tomorrow is expected to be: </p>
    <h1>Sunny </h1>
    <img src="http://www.misskatecuttables.com/uploads/shopping_cart/9192/large_cute-sun8.png" />
  </section>
</template>

<script>
import editComponents from './components-edit';
export default {
  props: ['cmpData'],

  methods: {
    editTextContent(ev) { //element is what the user gave me, what she wrote
      // console.log(userTextChanges)
      this.cmpData.title = ev.target.innerText;
      console.log('this.cmpData.title: ', this.cmpData.title)
    }
  },
  components: {
    editComponents
  }
}
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
}

.weather {
    flex-direction: row;
}

img {
  width: 20%;
  margin: auto;
}
</style>
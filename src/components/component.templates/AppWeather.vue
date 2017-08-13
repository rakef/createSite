<template>
  <section>
    <edit-components class="weather" :cmpId="cmpData.id"></edit-components>
    <p> The weather tomorrow is expected to be: </p>
    <div v-if="seeSun">
      <h1>Sunny </h1>
      <img src="http://www.misskatecuttables.com/uploads/shopping_cart/9192/large_cute-sun8.png" />
    </div>
  </section>
</template>

<script>
import editComponents from './components-edit';
export default {
  props: ['cmpData'],
  data() {
    return {
      seeSun: false
    }
  },

  methods: {
    editTextContent(ev) { //element is what the user gave me, what she wrote
      // console.log(userTextChanges)
      this.cmpData.title = ev.target.innerText;
      console.log('this.cmpData.title: ', this.cmpData.title)
    },
  },
  components: {
    editComponents
  },
  mounted() {
    let that = this;
    setTimeout(function () { that.seeSun = true }, 2000);
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

* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
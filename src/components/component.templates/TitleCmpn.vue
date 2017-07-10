<template>
  <section>
    <!--previously YOYOYO-->
    <edit-components :cmpId="cmpData.id"></edit-components>
    <!--<h1>{{cmpData.txt}}</h1>-->
  
    <h1 contenteditable="true" @keyup="editTextContent($event)"> {{cmpData.title}}</h1>
    <p contenteditable="true" style="margin-bottom: 20px">{{cmpData.subtitle}} </p>
  
  </section>
</template>

<script>
import editComponents from './components-edit';

export default {
  props: ['cmpData'],
  components: {
    editComponents
  },
  methods: {
    editTextContent(ev) { //element is what the user gave me, what she wrote
      // console.log(userTextChanges)
      this.cmpData.title = ev.target.innerText;
      console.log('this.cmpData.title: ', this.cmpData.title)
    }
  }
}
</script>

<style>

</style>

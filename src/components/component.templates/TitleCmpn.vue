<template>
  <section>
      <edit-components :cmpId="cmpData.id"></edit-components>
      <h1>{{cmpData.txt}}</h1>
  </section>
</template>

<script>
import editComponents from './components-edit';

export default {
  props: ['cmpData'],
  components: {
    editComponents
  }

}
</script>

<style>
  
</style>

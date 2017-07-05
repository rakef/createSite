<template>
  <main>
      <!--<div v-for="cmpnTemplates"></div>-->
      <component 
          v-for="(cmpn, idx) in cmpnTemplates" 
          :key="idx" :is="cmpn.cmpn"
          :txt="cmpn.txt"
      ></component>
      <!--<title-cmpn></title-cmpn>-->
  </main>
</template>

<script>
import TitleCmpn from '../component.templates/TitleCmpn';
import Cat from '../component.templates/Cat';
export default {
  data() {
    return {
      cmpnTemplates: [
        {
          cmpn: TitleCmpn,
          txt: 'Yo Yo Yo'
        },
        {
          cmpn: Cat,
          txt: 'Meow'
        },
      ]
    }
  }
}
</script>

<style>
  
</style>

<template>
  <main>
      <!--<div v-for="cmpnTemplates"></div>-->
      <button @click="handleAddCompPopup">&CirclePlus;</button>
      <add-cmpn-popup v-if="isAddCompPopupShown"></add-cmpn-popup>
      <component 
          v-for="(cmpn, idx) in cmpnTemplates" 
          :key="idx" :is="cmpn.cmpn"
          :txt="cmpn.txt"
      ></component>
      <!--<title-cmpn></title-cmpn>-->
  </main>
</template>

<script>
import AddCmpnPopup from '../service/AddCmpnPopup';
import TitleCmpn from '../component.templates/TitleCmpn';
import Cat from '../component.templates/Cat';
import AppHeader from '../component.templates/AppHeader';
export default {
  components: {
    AddCmpnPopup
  },
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
        {
          cmpn: AppHeader,
          txt: null
        },
      ]
    }
  },
  methods: {
    handleAddCompPopup() {
      this.$store.commit('toggleAddCompPopup')
    }
  },
  computed: {
    isAddCompPopupShown() {return this.$store.state.isAddCompPopupShown}
    // isModalOpen() {return this.$store.state.isModalOpen}
  }
}
</script>

<style>
  button {
    font-size: 2em;
    border: none;
    padding: 2px;
    background-color: transparent;
  }
  
</style>

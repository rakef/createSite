<template>
  <main>
      <!--<div v-for="cmpnTemplates"></div>-->
      <button @click="handleAddCompPopup">&CirclePlus;</button>
      <add-cmpn-popup v-if="isAddCompPopupShown"></add-cmpn-popup>
      <component 
          v-for="(cmp, idx) in cmpTemplates" 
          :key="idx" :is="cmp.type"
          :data="cmp"
      ></component>
      <!--<title-cmpn></title-cmpn>-->
  </main>
</template>

<script>
import AddCmpnPopup from '../service/AddCmpnPopup';
import TitleCmpn from '../component.templates/TitleCmpn';
import Cat from '../component.templates/Cat';
export default {
  components: {
    AddCmpnPopup,
    TitleCmpn,
    Cat
  },
  methods: {
    handleAddCompPopup() {
      this.$store.commit('toggleAddCompPopup');
    }
  },
  computed: {
    isAddCompPopupShown() {return this.$store.state.isAddCompPopupShown},

    cmpTemplates() {
      return this.$store.state.userComponentsData;
    }
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

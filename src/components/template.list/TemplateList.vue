<template>
  <main>
      <button @click="handleAddCompPopup">&CirclePlus;</button>
      <add-cmpn-popup v-if="isAddCompPopupShown"></add-cmpn-popup>
      <editor></editor>
      <component 
          v-for="cmp in cmpTemplates" 
          :key="cmp.id" :is="cmp.type"
          :cmpData="cmp"
      ></component>
  </main>
</template>

<script>
import AddCmpnPopup from '../service/AddCmpnPopup';
import TitleCmpn from '../component.templates/TitleCmpn';
import Cat from '../component.templates/Cat';
import AppHeader from '../component.templates/AppHeader';
import Editor from '../service/Editor';
export default {
  components: {
    AddCmpnPopup,
    TitleCmpn,
    Cat,
    AppHeader,
    Editor
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

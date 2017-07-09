<template>

  <main>
      <button @click="handleAddCompPopup" data-toggle="tooltip" title="add component">&CirclePlus;</button>
      <add-cmpn-popup v-if="isAddCompPopupShown"></add-cmpn-popup>
      <editor v-if="isEditorShown"></editor>
      <component 
          v-for="cmp in cmpTemplates" 
          :key="cmp.id" :is="cmp.type"
          :cmpData="cmp"
      ></component>


      <h2 v-if="cmpTemplates.length === 0"> Start building your websit by adding components </h2>
      <img src="https://media.giphy.com/media/RrU8f9lImvJja/giphy.gif" v-if="cmpTemplates.length === 0"/>
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

      
    },
    isEditorShown() {return this.$store.state.isEditorShown},
  }
}
</script>

<style scoped>
  h2 {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      margin-top: 0;
  }
  
  button:hover:after{

  }
  
  button {
    background-color: transparent;
    font-size: 2em;
    border: none;
    padding: 20px;
  }
  
main {
  display: flex;
  flex-direction: column;
}

img {
margin: auto;
}

</style>

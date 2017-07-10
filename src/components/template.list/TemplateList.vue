<template>

  <main>
      <add-cmpn-popup v-if="isAddCompPopupShown"></add-cmpn-popup>
      <editor v-if="isEditorShown"></editor>
      <component 
          v-for="cmp in cmpTemplates" 
          :key="cmp.id" :is="cmp.type"
          :cmpData="cmp"
      ></component>
      <button @click="handleAddCompPopup" data-toggle="tooltip" title="add component">&CirclePlus;</button>


      <h2 v-if="!cmpTemplates.length"> Start building your website by adding components </h2>
      <img v-if="!cmpTemplates.length" src="http://bestanimations.com/Nature/beautiful-sun-reflecting-in-water-rock-bottom-river-brook-animated-gif.gif">
  </main>
</template>

<script>
import AddCmpnPopup from '../service/AddCmpnPopup';
import TitleCmpn from '../component.templates/TitleCmpn';
import Cat from '../component.templates/Cat';
import AppHeader from '../component.templates/AppHeader';
import Carousel from '../component.templates/Carousel';
import MapComp from '../component.templates/MapComp';
import Editor from '../service/Editor';
import AppText from '../component.templates/AppText'
export default {
  components: {
    AddCmpnPopup,
    TitleCmpn,
    Cat,
    AppHeader,
    Carousel,
    Editor,
    AppText, 
    MapComp,
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
  
  button {
    background-color: transparent;
    font-size: 2em;
    border: none;
    padding: 20px;
  }
  
/*main {
  display: flex;
  flex-direction: column;
}*/

img {
margin: auto;
}

</style>

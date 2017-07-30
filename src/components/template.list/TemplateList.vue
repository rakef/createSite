<template>

  <main>
      <add-cmpn-popup v-if="isAddCompPopupShown"></add-cmpn-popup>
      <editor v-if="isEditorShown"></editor>
<draggable v-model="cmpTemplates" :options="{handle: '.drag'}" >
      <component 
          v-for="cmp in cmpTemplates" 
          :key="cmp.id" :is="cmp.type"
          :cmpData="cmp"
      ></component>
</draggable>
      <button @click="handleAddCompPopup" data-toggle="tooltip" title="add component"><i class="fa fa-plus" aria-hidden="true"></i>
</button>


      <h2 v-if="!cmpTemplates.length"> Start building your website by adding components </h2>
      <img v-if="!cmpTemplates.length" src="https://media.giphy.com/media/RrU8f9lImvJja/giphy.gif">
  </main>
</template>

<script>
import draggable from 'vuedraggable'
import AddCmpnPopup from '../service/AddCmpnPopup';
import TitleCmpn from '../component.templates/TitleCmpn';
import Cat from '../component.templates/Cat';
import AppHeader from '../component.templates/AppHeader';
import Carousel from '../component.templates/Carousel';
import MapComp from '../component.templates/MapComp';
import Editor from '../service/Editor';
import AppText from '../component.templates/AppText';
import AppWeather from '../component.templates/AppWeather';
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
    Editor,
    AppWeather,
    draggable
  },
  methods: {
    handleAddCompPopup() {
      this.$store.commit('toggleAddCompPopup');
    }
  },
  computed: {
    isAddCompPopupShown() {return this.$store.state.isAddCompPopupShown},

    cmpTemplates: {
      get(){
        return this.$store.state.userComponentsData;
      },
      set(value){
        this.$store.commit({type: 'updateComponentsOrder', newCmpsOrder: value })
      }
      
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
    outline: none;
  }
  
main {
  background-image: 'https://www.heritageprairiefarm.com/wp-content/uploads/2015/09/HeritagePrairieFarm38.jpg';
}

img {
margin: auto;
}

</style>

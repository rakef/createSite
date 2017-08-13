<template>
    <div :style="cmpData.style">
    <edit-components :cmpId="cmpData.id"></edit-components>
        <h1 contenteditable="true" @blur="editTextContent($event, 'title')">{{cmpData.title}} </h1>
        <pre contenteditable="true" @blur="editTextContent($event, 'txt')">{{cmpData.txt}}</pre>
        <!-- <p> {{ cmpData.txt}} </p> -->
    </div>
</template>

<script>
import editComponents from './components-edit'

export default {
    name: 'AppText',
    props: ['cmpData'],
    components: {
        editComponents
    },
    data() {
        return {
            
        }
    },
    methods: {
        editTextContent(ev, prop) { //element is what the user gave me, what she wrote
            // console.log(userTextChanges)
            this.cmpData[prop] = ev.target.innerText;
            console.log('this.cmpData.title: ', this.cmpData[prop]);
            console.log(ev);
        }
    },

     computed: {
    detectTexColorChange() {   
            return this.$store.state.userComponentsData[compIdx].type;
    }
     },
        created(){
        console.log(this.cmpData, 'adasfasf')
    }

  }

</script>

<style scoped>
div {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h1 {
    margin-bottom: 0;
    padding-bottom: 0;
}
* {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>

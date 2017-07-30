<template>
    <div>
    <edit-components :cmpId="cmpData.id"></edit-components>

        <h1 contenteditable="true" @blur="editTextContent($event)">{{cmpData.title}} </h1>
        <!--<pre contenteditable="true" @blur="editTextContent($event)">{{cmpData.txt}}</pre>-->
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
        editTextContent(ev) { //element is what the user gave me, what she wrote
            // console.log(userTextChanges)
            this.cmpData.title = ev.target.innerText;
            console.log('this.cmpData.title: ', this.cmpData.title)
        }
    },
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
pre {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

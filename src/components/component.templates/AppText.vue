<template>
    <div>
        <h1 contenteditable="true" @keyup="editTextContent($event)">{{title}} </h1>
        <pre contenteditable="true" @keyup="editTextContent($event)">{{txt}}</pre>
    </div>
</template>

<script>
export default {
    name: 'AppText',
    props: ['cmpData'],
    methods: {
        editTextContent(ev) { //element is what the user gave me, what she wrote
            // console.log(userTextChanges)
            this.cmpData.title = ev.target.innerText;
            console.log('this.cmpData.title: ', this.cmpData.title)
        }
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
pre {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

<template>
    <vue-draggable-resizable class="editor-container" :resizable="false">
        <p>BG Color<input @change="handleBgChange($event)" type="color"></p>
        <p>Text Color<input @change="handleTxtChange($event)" type="color"></p>
    </vue-draggable-resizable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
    components: {
        VueDraggableResizable
    },
    methods: {
        handleBgChange(event) {
            console.log(event.target.value);
            this.$store.commit({ type: 'changeBgColor', bgColor: event.target.value });
        },
        handleTxtChange(event) {
            this.$store.commit({ type: 'changeTxtColor', txtColor: event.target.value });
        }
    }

}
</script>

<style scoped>
    .editor-container {
        /*border: 2px solid red;*/
        background-color: rgba(128, 147, 178, .9);
        padding: 15px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
    }
    
</style>

<template>
    <vue-draggable-resizable class="editor-container" :resizable="false">
        <span @click="handleCloseEditor">&Cross;</span>
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
            this.$store.commit({ type: 'changeBgColor', backgroundColor: event.target.value });
        },
        handleTxtChange(event) {
            this.$store.commit({ type: 'changeTxtColor', color: event.target.value });
        },
        handleCloseEditor() {
            this.$store.commit('setIsEditorShown', {shouldShow: false});
        }
    }

}
</script>

<style scoped>
    .editor-container {
        position: absolute;
        background-color: rgba(128, 147, 178, .9);
        padding: 15px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
    }

    span {
        position: absolute;
        top: 0;
        right: 10px;
        line-height: .5em;
        display: block;
        cursor: pointer;
        font-size: 3em;
        padding: 0;
        margin: 0;
        color: white;
    }
    
</style>

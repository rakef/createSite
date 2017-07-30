<template>
    <section>
        <button @click="handleEditComp"><i class="fa fa-pencil" aria-hidden="true"></i>
 </button>
        <button v-on:click="deleteComponent"><i class="fa fa-trash" aria-hidden="true"></i>
</button>
        <button class="drag" ><i class="fa fa-hand-paper-o" aria-hidden="true"></i>
</button>
    </section>
</template>

<script>
export default {
    props: ['cmpId'],
    data() {
        return {
        }
    },
    methods: {
        deleteComponent() {
            var verifyDeletion = confirm('are you sure you want to delete this component?')
            console.log(this.cmpId);

            if (verifyDeletion) {
                this.$store.commit({ type: 'deleteUserCmp', cmpId: this.cmpId })
            }
        },
        handleEditComp() {
            this.$store.commit({ type: 'setCurrEditedComp', cmpId: this.cmpId });
            this.$store.commit('setIsEditorShown', {shouldShow: true});
        }

    }
}
</script>

<style scoped>
section {
    display: flex;
    position: absolute;
    right: 0;
    z-index: 9;
    overflow: hidden;
    /*border-radius: 1em;*/
    box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
}


button {
    background: rgba(255, 249, 249, 0.7);
    width: 40px;
    height: 40px;
    margin: 0;
    outline: none;
    font-size: 1.5em;
}
.draggable-element{
background: red;

}

/*button:first-child {
    left: 1.5em;
    font-size: 25px;
}*/
</style>

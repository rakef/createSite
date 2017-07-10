<template>
    <section>
        <span @click="handleAddCompPopup">&Cross;</span>
        <ul>
            <li>
                <img @click="handleAddCmp('title-cmpn')" src="../../assets/img/default_cmp_1.png">
            </li>
            <li>
                <img @click="handleAddCmp('cat')" src="../../assets/img/default_cmp_2.png">
            </li>
            <li>
                <img @click="handleAddCmp('app-header')" src="../../assets/img/default_cmp_3.png">
            </li>
            <li>
                <img @click="handleAddCmp('carousel')" src="../../assets/img/default_cmp_4.png">
            </li>
            <li>
                <img @click="handleAddCmp('app-text')" src="../../assets/img/default_cmp_5.png">
            </li>
            <li>
                <img @click="handleAddCmp('mapComp')" src="../../assets/img/default_cmp_6.png">
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    methods: {
        handleAddCmp(type) {
            this.$store.commit({ type: 'addDataToUser', cmpType: type });
            this.handleAddCompPopup();
        },
        handleAddCompPopup() {
            this.$store.commit('toggleAddCompPopup')
        }
    }
}
</script>

<style scoped>
section {
    position: fixed;
    z-index: 999;
    top: 5%;
    left: 20%;
    width: 50vw;
    height: fit-content;
    /*margin: auto;*/
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
}

li {
    position: relative;
    border: 2px solid #333;
    margin: 1%;
    overflow: hidden;
    width: 540px;
    background: white;
}

ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    height: 100px;
    /*max-width: 90%;*/
    border: solid 2px transparent;
    transition: border .3s;
    cursor: pointer;
    transition: all 0.3s;
}

img:hover {
    transform: scale(1.1);
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

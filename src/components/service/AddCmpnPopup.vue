<template>
    <section>
        <div>
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
                <li>
                    <img @click="handleAddCmp('app-weather')" src="../../assets/img/default_cmp_7.png">
                </li>
    
            </ul>
        </div>
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
    display: flex;
    /*flex-direction: column;*/
    justify-content: center;
    position: fixed;
    z-index: 999;
    /*top: 5%;
    left: 20%;*/
    width: 100vw;
    /*height: fit-content;*/
    /*margin: auto;*/
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
}

div {
    position: relative;
    display: flex;
    justify-content: center
}

li {
    /*position: relative;*/
    border: 1px solid #333;
    margin: 1%;
    overflow: hidden;
    width: 400px;
    cursor: pointer;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    width: fit-content;
}

img {
    vertical-align: top;
    width: 100%;
    max-width: 100%;
    transition: all 0.3s;
}

img:hover {
    transform: scale(1.1);
}

span {
    /*z-index: 999;
    position: absolute;
    top: 0;
    right: 10px;*/
    text-align: right;
    line-height: .5em;
    display: block;
    cursor: pointer;
    font-size: 3em;
    padding: 10px;
    margin: 0;
    color: black;
}


/*span {
    z-index: 999;
    position: absolute;
    top: 0;
    right: 10px;
    line-height: .5em;
    display: block;
    cursor: pointer;
    font-size: 3em;
    padding: 10px;
    margin: 0;
    color: black;
}*/

* {
    margin: 0;
    padding: 0;
}
</style>

<template>
  <section>
    <div>
        <span @click="handleAddCompPopup">&Cross;</span>
        <ul>
            <li><img @click="handleAddCmp('title-cmpn')" src="../../assets/img/default_cmp_1.png"></li>
            <li><img @click="handleAddCmp('cat')" src="../../assets/img/default_cmp_2.png"></li>
            <li><img @click="handleAddCmp('app-header')" src="../../assets/img/default_cmp_3.png"></li>
            <li><img @click="handleAddCmp(4)" src="../../assets/img/default_cmp_4.png"></li>
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
    div {
        position: fixed;
        top: 5%;
        left: 20%;
        width: 60vw;
        height: fit-content;
        margin: auto;
        background-color: rgba(39, 16, 16, 0.64);
        border-radius: 5px;
    }
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img {
        height: 100px;
        max-width: 90%;
        border: solid 2px transparent;
        transition: border .3s;
        cursor: pointer;
    }
    img:hover {
        border: solid 2px green;
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

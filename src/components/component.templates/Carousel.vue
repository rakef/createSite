<template>
    <section>
        <edit-components :cmpId="cmpData.id"></edit-components>
        <carousel-3d>
            <slide
                v-for="(img, idx) in cmpData.imgUrls" 
                :index="idx"
                :key="idx">
                <img :src="img">
            </slide>
            <!--<slide :index="1">
                <img :src="cmpData.imgUrl + '&' + Math.random()">
            </slide>
            <slide :index="2">
                <img :src="cmpData.imgUrl + '&' + Math.random()">
            </slide>-->
        </carousel-3d>
    </section>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import editComponents from './components-edit';
export default {
    props: ['cmpData'],
    components: {
        Carousel3d,
        Slide,
        editComponents
    },

}
</script>

<style scoped>
    img {
        height: 100%;
    }
</style>

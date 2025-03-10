<template>
    <div class="bg-light rounded mt-2 p-2 ">

        <div class=" d-flex  justify-content-between align-items-start p-1">
            <h5 class="text-muted">Photos</h5>
            <p class="fs-6 text-primary">See All Photos</p>
        </div>

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12 mb-1">
                    <div class="d-flex justify-content-between">

                        <div v-for="image_data in imagesData" :key="image_data.id" class="d-flex bg-primary"
                            style="height: 15vh;width: 15vh;overflow: hidden;">
                            <img :src="image_data.image" alt="" style="height: 15vh;width: 15vh;">
                        </div>

                    </div>
                </div>

                <div class="col-lg-12 col-md-12 mb-1">
                    <div class="d-flex justify-content-between">

                        <div class="d-flex" style="height: 15vh;width: 15vh;">
                            <img src="" alt="">
                        </div>

                        <div class="d-flex" style="height: 15vh;width: 15vh;">
                            <img src="" alt="">
                        </div>
                        <div class="d-flex" style="height: 15vh;width: 15vh;">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12 mb-1">
                    <div class="d-flex justify-content-between">

                        <div class="d-flex" style="height: 15vh;width: 15vh;">
                            <img src="" alt="">
                        </div>

                        <div class="d-flex" style="height: 15vh;width: 15vh;">
                            <img src="" alt="">
                        </div>
                        <div class="d-flex" style="height: 15vh;width: 15vh;">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div>


        </div>


    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Photos',

    data() {
        return {
            imagesData: [],
        }
    },

    methods: {
        async getImages() {
            let id = this.$route.params.id
            let result = await axios.get('http://localhost/facebook/posts/images/' + id);
            this.imagesData = result.data;
            // console.log(imagesData.image);
        }
    },
    mounted() {
        this.getImages();
    }
}
</script>

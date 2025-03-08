<template>
    <div class="bg-light p-2 d-flex justify-content-between  align-items-center mt-2 rounded">
        <div id="row" class="row overflow-x-scroll d-flex flex-nowrap flex-row overflow-hidden mx-1">

            <div v-for="item in status" :key="item.id" class="card m-2 p-0" style="width: 9rem; height: 12rem;">
                <div :style="{ backgroundImage: 'url(' + item.image + ')', backgroundSize: 'cover', backgroundPosition: 'center', height: '10rem' }"
                    class="card-img-top  shadow-lg"></div>
                <div class="bg-light pb-1">
                    <p class="card-title text-center rounded fs-7 fw-bold">{{ item.first_name }}</p>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'StoryBar',

    data() {
        return {
            status: [],
        }
    },

    methods: {
        async getStatus() {
            let result = await axios.get('http://localhost/facebook/status');
            this.status = result.data;
        }
    },

    mounted() {
        this.getStatus();
    }

}







</script>



<style>
.row::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.row::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 99px;
}

.row::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 99px;
    transition: background 0.3s ease-in-out;
}

.row:hover::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
}
</style>

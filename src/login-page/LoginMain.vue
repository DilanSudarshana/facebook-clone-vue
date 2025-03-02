<template>

    <body class="d-flex justify-content-center align-items-center vh-100 bg-light">

        <div class="container">
            <div class="row">

                <div class="col-lg-6 col-md-6">
                    <LoginLeft></LoginLeft>
                </div>

                <div class="col-lg-6 col-md-6">
                    <LoginRight></LoginRight>
                </div>

            </div>
        </div>

        

    </body>
    <Footer></Footer>

</template>

<script>
import LoginLeft from './components/LoginLeft.vue';
import LoginRight from './components/LoginRight.vue';
import Footer from '../includes/footer/Footer.vue'

export default {
    name: 'LoginMain',

    components: {
        LoginLeft,
        LoginRight,
        Footer,
    }

}
</script>

<style>
#box {
    height: 70vh;
}
</style>
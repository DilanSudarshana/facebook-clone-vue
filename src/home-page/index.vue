<template>
    <div class="container">
        <div class="row shadow-sm">
            <Navbar></Navbar>
        </div>
    </div>
</template>

<script>
import Navbar from '../includes/navbar/navbar.vue'
export default {
    name: 'Index',

    components: {
        Navbar,
    }

}
</script>

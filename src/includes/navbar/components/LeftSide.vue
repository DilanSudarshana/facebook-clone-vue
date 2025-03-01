<template>

    <div class="h-100 d-flex justify-content-center align-items-center">

        <div class="rounded-circle me-3 shadow-sm "
            style="width: 30px; height: 30px; overflow: hidden; background-color: #007bff;">
            <img src="/src/assets/icons/facebook.svg" style="width: 30px; height: 30px;" alt="">
        </div>

        <div class="col-md-6 col-lg-10 d-none d-md-block">
            <input style="height: 30px;margin-top: 2px;background-color: #f0f0f0;width: 30vh;" type="text" class="form-control rounded-pill" placeholder="Search"
                aria-label="Recipient's username" aria-describedby="basic-addon2">
        </div>
    </div>

</template>

<script>

export default {
    name: 'LeftSide',

}
</script>

<template>

    <div class="h-100 d-flex justify-content-between align-items-center mx-5">

        <div id="center-div" class="rounded d-flex align-items-center justify-content-center w-25"
            style="width: 30px; height: 30px;">
            <i id="icon-middle" class="bi bi-house-door-fill fs-5"></i>
        </div>

        <div id="center-div" class="rounded d-flex align-items-center justify-content-center w-25"
            style="width: 30px; height: 30px;">
            <i id="icon-middle" class="bi bi-play-btn-fill fs-5"></i>
        </div>

        <div id="center-div" class="rounded d-flex align-items-center justify-content-center w-25"
            style="width: 30px; height: 30px;">
            <i id="icon-middle" class="bi bi-camera-reels-fill fs-5"></i>
        </div>

        <div id="center-div" class="rounded d-flex align-items-center justify-content-center w-25"
            style="width: 30px; height: 30px;">
            <i id="icon-middle" class="bi bi-controller fs-5"></i>
        </div>

    </div>

</template>

<script>

export default {
    name: 'Middle',

}
</script>

<style>
#center-div {
    transition: background-color 0.3s ease-in-out;
}

#center-div:hover {
    background-color: #efefef;
}

#icon-middle{
    transition: background-color 0.3s ease-in-out;
}
#icon-middle:hover{
    color: #2b35f3;
}
</style>

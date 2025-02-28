<template>

    <div style="height: 65vh;" class="container rounded bg-light mt-2 mb-3">

        <div class="row p-2">
            <div class=" d-flex justify-content-between align-items-start">
                <div class="d-flex justify-content-start align-items-start">
                    <div class="rounded-circle me-3"
                        style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                    </div>
                    <div>
                        <p id="head-text" class="fw-bold"> Rata Anurata <br> 1h <i class="bi bi-globe"></i></p>

                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-end">
                    <div class="me-3">
                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div>
                        <i class="bi bi-x-lg"></i>
                    </div>
                </div>
            </div>
        </div>

        <div id="post-image" class="row pt-0 p-2 bg-warning" style="height: 40vh;">

        </div>

        <div class="row p-2">
            <div class=" d-flex justify-content-between align-items-start mt-3">
                <div class="d-flex justify-content-start align-items-start">

                    <div class="me-1">
                        <p style="font-size: small;"><i class="bi bi-hand-thumbs-up-fill text-primary"></i> 10</p>
                    </div>

                </div>
                <div class="d-flex justify-content-start align-items-end ">
                    <div class="me-2">
                        <p style="font-size: small;">46 <i class="bi bi-chat-fill"></i></p>
                    </div>
                    <div>
                        <p style="font-size: small;">128 <i class="bi bi-send-fill"></i></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class=" d-flex justify-content-between align-items-center mb-2">
                <div>
                    <p style="font-size: small;"><i class="bi bi-hand-thumbs-up"></i> Like</p>
                </div>
                <div>
                    <p style="font-size: small;"><i class="bi bi-chat"></i> Comment</p>
                </div>
                <div>
                    <p style="font-size: small;"><i class="bi bi-whatsapp"></i> Send</p>
                </div>
                <div>
                    <p style="font-size: small;"><i class="bi bi-send"></i> Shair</p>
                </div>
            </div>
        </div>

    </div>


    <!-- <div style="height: 60vh;" class="container rounded bg-light mt-2 mb-3">

        <div class="row mb-1">
            <div style="height: 5vh;" class="col-lg-2 p-2 mb-1">
                <div class="rounded-circle me-3"
                    style="width: 30px; height: 30px; overflow: hidden; background-color: #007bff;">
                </div>
            </div>
            <div style="height: 5vh;" class="col-lg-8 p-2">
                <p class="fw-bold">New Post</p>
            </div>
            <div style="height: 5vh;" class="col-lg-2 p-2">
                Exit
            </div>
        </div>

        <div id="post-image" class="row">
            <div style="height: 40vh;" class="col-lg-12 bg-dark">
                <img src="" alt="">
            </div>
        </div>

        <div class="row">
            <div style="height: 5vh;" class="col-lg-12 p-3">
                1
            </div>
        </div>

    </div> -->

</template>

<script>
export default {
    name: 'Post',

}
</script>

<style>
#post-image {
    background-image: url();
}

#head-text {
    font-size: 10px;
}

#post-image {
    background: url('/src/assets/icons/facebook.svg');
}
</style>

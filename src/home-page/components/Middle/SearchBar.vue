<template>

    <div class="d-flex flex-row justify-content-center align-items-start bg-light rounded shadow" style="height: 18vh;">
        <div class="container">
            <div class="row">
                <div class="h-100 d-flex flex-row justify-content-center align-items-start mt-2">
                    <div class="rounded-circle me-2"
                        style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                        <img src="/src/assets/images/pro-pic-02.svg" style="width: 30px; height: 30px;border-radius: 100px;" alt="">
                    </div>
                    <div>
                        <input type="text" class="form-control rounded-pill" placeholder="Whats on your mind Dilan?"
                            style="height: 4vh;width: 40vh;margin-top: 2px;background-color: #f0f0f0;"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="d-flex flex-row justify-content-between align-items-center">

                    <div id="contact-item" class="d-flex flex-row justify-content-between align-items-center rounded">
                        <div id="center-div" class="rounded d-flex align-items-center justify-content-center"
                            style="width: 30px; height: 30px;">
                            <i style="color: red;" class="bi bi-camera-reels-fill fs-5"></i>
                        </div>
                        <p class="me-2 fw-bold mt-1 mb-0">Live Video</p>
                    </div>

                    <div id="contact-item" class="d-flex flex-row justify-content-between align-items-center rounded">
                        <div id="center-div" class="rounded d-flex align-items-center justify-content-center"
                            style="width: 30px; height: 30px;">
                            <i style="color: lawngreen;" class="bi bi-images fs-5"></i>
                        </div>
                        <p class="me-2 fw-bold mt-1 mb-0">Photo/Videos</p>
                    </div>

                    <div id="contact-item" class="d-flex flex-row justify-content-between align-items-center rounded">
                        <div id="center-div" class="rounded d-flex align-items-center justify-content-center"
                            style="width: 30px; height: 30px;">
                            <i style="color: yellow;" class="bi bi-envelope-paper-heart-fill fs-5"></i>
                        </div>
                        <p class="me-2 fw-bold mt-1 mb-0">Feeling/Activity</p>
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'SearchBar',

}
</script>
<style>
p {
    font-size: 10px;
}

#contact-item {
    transition: background-color 0.3s ease-in-out;
}

#contact-item:hover {
    background-color: #efefef;
}
</style>
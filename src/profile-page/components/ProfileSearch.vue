<template>

    <div class="col-lg-8 col-md-12 ">

        <div class="d-flex flex-row justify-content-center align-items-start bg-light rounded" style="height: 18vh;">
            <div class="container">

                <div class="row">
                    <div class="h-100 d-flex flex-row justify-content-center align-items-start mt-2 ">

                        <div class="rounded-circle me-2 ms-2"
                            style="width: 40px; height: 40px; overflow: hidden; background-color: #f0f0f0;">
                            <img src="/src/assets/images/pro-pic-02.svg"
                                style="width: 40px; height: 40px;border-radius: 100px;" alt="">
                        </div>

                        <div class="">
                            <input type="text" class="form-control rounded-pill" placeholder="Whats on your mind Dilan?"
                                style="background-color: #f0f0f0;width: 50vh;" aria-label="Recipient's username"
                                aria-describedby="basic-addon2">
                        </div>
                    </div>
                </div>

                <hr>
                <div class="row mx-5">
                    <div class="d-flex flex-row justify-content-between align-items-center">

                        <div id="contact-item"
                            class="d-flex flex-row justify-content-between align-items-center rounded">
                            <div id="center-div" class="rounded d-flex align-items-center justify-content-center"
                                style="width: 30px; height: 30px;">
                                <i style="color: red;" class="bi bi-camera-reels-fill fs-5"></i>
                            </div>
                            <p class="me-2 fw-bold mt-1 mb-0">Live Video</p>
                        </div>

                        <div id="contact-item"
                            class="d-flex flex-row justify-content-between align-items-center rounded">
                            <div id="center-div" class="rounded d-flex align-items-center justify-content-center"
                                style="width: 30px; height: 30px;">
                                <i style="color: lawngreen;" class="bi bi-images fs-5"></i>
                            </div>
                            <p class="me-2 fw-bold mt-1 mb-0">Photo/Videos</p>
                        </div>

                        <div id="contact-item"
                            class="d-flex flex-row justify-content-between align-items-center rounded">
                            <div id="center-div" class="rounded d-flex align-items-center justify-content-center"
                                style="width: 30px; height: 30px;">
                                <i style="color: blue;" class="bi bi-flag-fill fs-5"></i>
                            </div>
                            <p class="me-2 fw-bold mt-1 mb-0">Life Event</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <ProfilePostDetails></ProfilePostDetails>

        <ProfilePost></ProfilePost>



    </div>


</template>


<script>
import ProfilePostDetails from './ProfilePostDetails.vue';
import ProfilePost from './ProfilePost.vue';

export default {
    name: 'ProfileSearch',
    components: {
        ProfilePostDetails,
        ProfilePost,
    }
}

</script>

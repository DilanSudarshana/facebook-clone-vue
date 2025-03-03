<template>

    <div class="col-lg-12 col-md-6 mt-1">
        <div class="d-flex justify-content-center align-items-start">
            <div>

                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <div class="d-flex justify-content-start align-items-center">
                                <div class="rounded-circle me-3 my-2"
                                    style="width: 30vh; height: 30vh; overflow: hidden; background-color: #f0f0f0;">
                                    <img src="/src/assets/images/pro-pic-02.svg" style="width: 30vh; height: 30vh;"
                                        alt="">
                                </div>

                                <div class="text-strat">
                                    <h2 class="fw-bold mb-2">Dilan Sudarshana</h2>
                                    <p style="font-size: larger;" class="m-0">Dila</p>
                                    <h5 class="text-muted m-0">2.8K friends</h5>

                                    <div class="d-flex justify-content-start align-items-start mt-2">
                                        <div class="rounded-circle"
                                            style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">

                                        </div>
                                        <div class="rounded-circle "
                                            style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">

                                        </div>
                                        <div class="rounded-circle"
                                            style="width: 30px; height: 30px; overflow: hidden; background-color:#f0f0f0;">

                                        </div>
                                        <div class="rounded-circle"
                                            style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div class="col-lg-4 col-md-12 pt-5 mb-2">
                            <div class="container">
                                <div class="row">

                                    <div class="col-lg-12 col-md-6 mt-3">
                                        <div class="d-flex justify-content-end align-items-end">
                                            <button type="button" class="me-2 btn btn-primary btn-sm fw-bold">Edit
                                                Profile</button>
                                            <button type="button" class="btn btn-secondary btn-sm fw-bold">Edit
                                                Profile</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12 col-md-6 mt-3">
                                        <div class="d-flex justify-content-end align-items-end">
                                            <button type="button"
                                                class="btn btn-light btn-sm fw-bold border-0 text-primary"><i
                                                    class="bi bi-caret-down"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="mb-2">

                    </div>

                    <div class="row mb-2 mx-3">
                        <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class=" d-flex justify-content-between align-items-center mt-1">
                                <div id="center-div"
                                    class="rounded d-flex align-items-center justify-content-center w-25"
                                    style="width: 30px; height: 30px;">
                                    <h6 class="text-muted">Posts</h6>
                                </div>

                                <div id="center-div"
                                    class="rounded d-flex align-items-center justify-content-center w-25"
                                    style="width: 30px; height: 30px;">
                                    <h6 class="text-muted">About</h6>
                                </div>

                                <div id="center-div"
                                    class="rounded d-flex align-items-center justify-content-center w-25"
                                    style="width: 30px; height: 30px;">
                                    <h6 class="text-muted">Friends</h6>
                                </div>

                                <div id="center-div"
                                    class="rounded d-flex align-items-center justify-content-center w-25"
                                    style="width: 30px; height: 30px;">
                                    <h6 class="text-muted">Photos</h6>
                                </div>

                                <div id="center-div"
                                    class="rounded d-flex align-items-center justify-content-center w-25"
                                    style="width: 30px; height: 30px;">
                                    <h6 class="text-muted">videos</h6>
                                </div>

                                <div id="center-div"
                                    class="rounded d-flex align-items-center justify-content-center w-25"
                                    style="width: 30px; height: 30px;">
                                    <a style="text-decoration: none;" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <h6 class="text-muted">More <i class="bi bi-caret-down"></i></h6>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="d-flex justify-content-end align-items-end me-2">
                                <button type="button" class="btn btn-light btn-sm fw-bold border-0"><i
                                        class="bi bi-three-dots"></i></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import ProfileIntro from './ProfileIntro.vue';

export default {
    name: 'ProfileDetails',

    components: {
        ProfileIntro,
    }
}
</script>

<style>
#center-div {
    transition: background-color 0.3s ease-in-out;
}

#center-div:hover {
    background-color: #efefef;
}
</style>

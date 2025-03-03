<template>

    <div class="d-flex flex-row justify-content-center align-items-start bg-light rounded mt-2">
        <div class="container">

            <div class="container rounded bg-light mt-2 mb-3">

                <div class="row p-2">
                    <div class=" d-flex justify-content-between align-items-start">
                        <div class="d-flex justify-content-start align-items-start">
                            <div class="rounded-circle me-3"
                                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                                <img src="/src/assets/images/pro-pic-02.svg"
                                    style="width: 30px; height: 30px;border-radius: 100px;" alt="">
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

                <div id="post-image" class="row pt-0 p-2 bg-warning" style="height: 50vh;">

                </div>

                <div class="row p-2">
                    <div class=" d-flex justify-content-between align-items-start mt-3">
                        <div class="d-flex justify-content-start align-items-start">

                            <div class="me-1">
                                <p style="font-size: small;"><i class="bi bi-hand-thumbs-up-fill text-primary"></i> 10
                                </p>
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
                <hr class="mt-0">
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

        </div>
    </div>



</template>

<script>

export default {
    name: 'ProfilePost',

}
</script>

<template>

    <body class="d-flex justify-content-center align-items-start vh-150 bg-light mb-5">

        <div class="container pb-5">

            <div class="row mt-3">

                <div class="col-lg-12 col-md-12">
                    <h1 class="fw-bold text-primary text-center">facebook</h1>
                </div>

            </div>

            <div class="row mt-2">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-center align-items-center">
                        <div style="width: 70vh;" class="pt-2 rounded shadow bg-light">

                            <div class="container">

                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <h3 class="text-center fw-bold">Create a new account</h3>
                                        </div>
                                        <p class="text-center fs-6 text-muted">It's quick and easy.</p>
                                    </div>
                                </div>

                                <hr class="mt-0">

                                <div class="row pb-2">
                                    <div class="col-lg-6 col-md-6 mb-1">
                                        <input type="email" id="form1Example1" class="form-control"
                                            placeholder="First Name" />
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-1">
                                        <input type="email" id="form1Example1" class="form-control"
                                            placeholder="Last Name" />
                                    </div>
                                </div>

                                <div class="row pb-2">
                                    <p class="text-muted fs-6 ms-1">Date of birth</p>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <input type="number" id="dayInput" class="form-control" placeholder="DD"
                                                min="1" max="31" />
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <input type="number" id="monthInput" class="form-control" placeholder="MM"
                                            min="1" max="12" />
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <input type="number" id="yearInput" class="form-control" placeholder="YYYY"
                                            min="1900" max="9999" />
                                    </div>
                                </div>

                                <div class="row pb-2">
                                    <p class="text-muted fs-6 ms-1">Gender</p>

                                    <div class="col-lg-4 col-md-6 mb-3">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <input type="radio" id="female" name="gender" value="female"
                                                class="form-check-input" />
                                            <label for="female" class="form-check-label ms-2">Female</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <input type="radio" id="male" name="gender" value="male"
                                                class="form-check-input" />
                                            <label for="male" class="form-check-label ms-2">Male</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <input type="radio" id="custom" name="gender" value="custom"
                                                class="form-check-input" />
                                            <label for="custom" class="form-check-label ms-2">Custom</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row pb-2">

                                    <div class="col-lg-12 col-md-12">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <input type="email" id="form1Example1" class="form-control"
                                                placeholder="Mobile number or email address" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row pb-2">

                                    <div class="col-lg-12 col-md-12">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <input type="password" id="form1Example1" class="form-control"
                                                placeholder="New password" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row pb-2">

                                    <div class="col-lg-12 col-md-12 p-3">
                                        <p style="font-size: small;">People who use our service may have uploaded your
                                            contact
                                            information to
                                            Facebook. Learn more.</p>

                                        <p style="font-size: small;">By clicking Sign Up, you agree to our Terms,
                                            Privacy Policy and Cookies
                                            Policy. You may receive SMS notifications from us and can opt out at any
                                            time.</p>
                                    </div>
                                </div>

                                <div class="row pb-2">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <button id="create-button" data-mdb-ripple-init type="submit"
                                                class="btn btn-success btn-block w-50">
                                                <router-link to="/sign-up" style="text-decoration: none;color: black;">
                                                    <h6 class="text-light fw-bold">Create new account</h6>
                                                </router-link>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row pb-0">
                                    <div class="col-lg-12 col-md-12">
                                        <router-link to="/login" style="text-decoration: none;color: black;">
                                            <p class="fs-6 text-primary text-center">Already have an account?</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>

    <Footer></Footer>
</template>

<script>
import Footer from '../includes/footer/Footer.vue';


export default {
    name: 'SignUpMain',

    components: {
        Footer,
    }
}
</script>
<style></style>
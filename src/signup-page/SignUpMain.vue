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

                                <!-- Input starts sing up -->

                                <div class="row pb-2">
                                    <div class="col-lg-6 col-md-6 mb-1">
                                        <input type="text" v-model="first_name" class="form-control"
                                            placeholder="First Name" />
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-1">
                                        <input type="email" v-model="last_name" class="form-control"
                                            placeholder="Last Name" />
                                    </div>
                                </div>

                                <div class="row pb-2">
                                    <p class="text-muted fs-6 ms-1">Date of birth</p>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <input type="number" v-model="date" id="dayInput" class="form-control"
                                                placeholder="DD" min="1" max="31" />
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <input type="number" v-model="month" id="monthInput" class="form-control"
                                            placeholder="MM" min="1" max="12" />
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <input type="number" v-model="year" id="yearInput" class="form-control"
                                            placeholder="YYYY" min="1900" max="9999" />
                                    </div>
                                </div>

                                <div class="row pb-2">
                                    <p class="text-muted fs-6 ms-1">Gender</p>

                                    <div class="col-lg-4 col-md-6 mb-3">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <input type="radio" id="female" v-model="gender" name="gender"
                                                value="female" class="form-check-input" />
                                            <label for="female" class="form-check-label ms-2">Female</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <input type="radio" id="male" v-model="gender" name="gender" value="male"
                                                class="form-check-input" />
                                            <label for="male" class="form-check-label ms-2">Male</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-1">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <input type="radio" id="custom" v-model="gender" name="gender"
                                                value="custom" class="form-check-input" />
                                            <label for="custom" class="form-check-label ms-2">Custom</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row pb-2">

                                    <div class="col-lg-12 col-md-12">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <input type="text" v-model="mobile_or_email" class="form-control"
                                                placeholder="Mobile number or email address" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row pb-2">

                                    <div class="col-lg-12 col-md-12">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <input type="password" v-model="password" class="form-control"
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
                                            <button id="create-button" v-on:click="signUp"
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
import axios from 'axios';

export default {
    name: 'SignUpMain',

    components: {
        Footer,
    },

    data() {
        return {
            first_name: '',
            last_name: '',
            date: '',
            month: '',
            year: '',
            gender: '',
            mobile_or_email: '',
            password: '',
        };
    },

    computed: {
        dob: {
            get() {
                return `${this.date} ${this.month} ${this.year}`;
            },
            set(newValue) {
                const m = newValue.match(/(\S*)\s+(.*)/);

                this.date = m[1];
                this.month = m[2];
                this.year = m[3];
            }
        }
    },

    methods: {
        async signUp() {

            let result = await axios.post('http://localhost/facebook/user/store', {
                first_name: this.first_name,
                last_name: this.last_name,
                dob: this.dob,
                gender: this.gender,
                mobile_or_email: this.mobile_or_email,
                password: this.password,

            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            if (result) {
                console.log('data inserted')

                this.first_name = ""
                this.last_name = ""
                this.year = ""
                this.gender = ""
                this.mobile_or_email = ""
                this.password = ""

            }
        }

    },
}
</script>
<style></style>
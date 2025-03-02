<template>

    <div class="d-flex flex-column justify-content-center align-items-center">

        <div id="login-form" class="p-3 rounded shadow bg-light">

            <form>
                <div data-mdb-input-init class="form-outline mb-2">
                    <input type="email" id="form1Example1" class="form-control" />
                </div>

                <div data-mdb-input-init class="form-outline mb-2">
                    <input type="password" id="form1Example2" class="form-control" />
                </div>

                <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block w-100 mt-4">
                    <router-link to="/">
                        <h5 class="text-light fw-bold">Log in</h5>
                    </router-link>
                </button>

                <div class="row mb-4 mt-3">
                    <div class="col text-center mt-2">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <hr>

                <div class="d-flex justify-content-center align-items-center pb-3 pt-3">
                    <button id="create-button" data-mdb-ripple-init type="submit"
                        class="btn btn-success btn-block w-50">
                        <h6 class="text-light fw-bold">Create new account</h6>
                    </button>
                </div>
            </form>

        </div>

        <p style="font-size: small;" class="text-center mt-3"><strong>Create a Page</strong> for a celebrity, brand or
            business.</p>

    </div>




</template>

<script>

export default {
    name: 'LoginRight'
}
</script>

<style>
#login-form {
    background-color: white;
    width: 60vh;
    margin-top: 15vh;
}

#create-button {
    background-color: #30c116;
    border: none;
}
</style>

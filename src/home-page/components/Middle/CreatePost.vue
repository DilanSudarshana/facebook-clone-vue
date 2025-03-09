<template>
    <div>

        <SearchBar data-bs-toggle="modal" data-bs-target="#exampleModal"></SearchBar>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create Post</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="mb-3">
                            <label for="post-text" class="col-form-label">What is on your mind:</label>
                            <input type="text" v-model="description" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="image-upload" class="col-form-label">Add Images</label>
                            <input type="file" class="form-control" id="image-upload" accept="image/*"
                                @change="onFileSelected">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button @click="createPost" type="button" class="btn btn-primary">Upload Image</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./SearchBar.vue";

export default {
    name: "CreatePost",
    components: {
        SearchBar,
    },

    data() {
        return {
            description: "",
            image: null,
            user_id: 1,
            type: 1,
        };
    },

    methods: {
        onFileSelected(event) {
            this.image = event.target.files[0];
        },

        async createPost() {

            const reader = new FileReader();

            reader.onload = async () => {
                const base64Image = reader.result;

                const fd = new FormData();
                fd.append('user_id', this.user_id);
                fd.append('type', this.type);
                fd.append('description', this.description);
                fd.append('image', base64Image);

                try {
                    const response = await axios.post('http://localhost/facebook/posts/create', fd, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    console.log(response.data);
                } catch (error) {
                    console.error('Error creating post:', error.response?.data || error);
                }
            };

            reader.readAsDataURL(this.image);
        },
    },


};
</script>
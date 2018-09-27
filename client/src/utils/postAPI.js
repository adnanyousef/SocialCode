import axios from "axios";

export default  {
    // get all the posts
    getPosts: function () {
        return axios.get("/api/posts");
    },

    savePost: function (postData) {
        return axios.post("/api/posts", postData)
    },

    likePost: function () {
        return axios.put("/api/posts")
    },
    commentPost: function (id) {
        return axios.post("/api/posts/comment")
    },
    // Gets the post with the given id
    getPost: function (id) {
        return axios.get("/api/posts/" + id);
    },

    editPost: function(id){
        return axios.put("/api/posts/" + id)
    },
    // Deletes the post with the given id (only if you made it)
    deletePost: function (id) {
        return axios.delete("/api/posts/" + id);
    },

    getPostId: function (id){
        return axios.get("/api/posts/author/" + id);
    }


    // like a post


   


}
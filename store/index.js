import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        // find index of (backend) edited post inside our Vuex Store
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        )
        // replace our Vuex post with the updated post info
        state.loadedPosts[postIndex] = editedPost
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            `${process.env.baseUrl}/posts.json`
          )
          .then((res) => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch((e) => context.error(e))
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date(),
        }
        return axios
          .post(
            'https://nuxt-blog-873be-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            createdPost
          )
          .then((result) => {
            // when we add post to backend, reflect it in our frontent (add to vuex store)
            vuexContext.commit('addPost', { ...createdPost, id: result.data.name })
            // result.data.name is the post ID assigned by the backend to the post
          })
          .catch((e) => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios
        .put(
          `https://nuxt-blog-873be-default-rtdb.europe-west1.firebasedatabase.app/posts/${editedPost.id}.json`,
          editedPost
        )
          .then((res) => {
          // update Vuex Store with the editedPost info
          vuexContext.commit('editPost', editedPost)
        })
        .catch((e) => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}

export default createStore

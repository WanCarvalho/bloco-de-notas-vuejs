import { createStore } from "vuex";

const store = createStore({
    state: {
        posts: [
            {
                "userId": 1,
                "id": 1,
                "title": "Nota 1",
                "body": "Nota para teste 1."
            },
            {
                "userId": 1,
                "id": 2,
                "title": "Nota 2",
                "body": "Nota para teste 2."
            }
        ]
    },
    actions: {
        deletePost({ state, commit }, id) {
            commit(
                'setPosts',
                state.posts.filter(p => p.id != id)
            )
        },
        getSinglePost({ state }, id) {
            return state.posts.find(p => p.id == id)
        },
        savePost({ state, commit }, post) {
            let newPosts = state.posts;
            if (post.id) {
                newPosts = state.posts.map(p => {
                    if (p.id == post.id) {
                        return post;
                    }

                    return p;
                })
            } else {
                newPosts.push(post);
            }
            commit('setPosts', newPosts)
        }
    },
    mutations: {
        setPosts: (state, posts) => {
            state.posts = posts;
        }
    },
})

export default store;
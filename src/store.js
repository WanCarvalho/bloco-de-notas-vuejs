import { createStore } from "vuex";

const store = createStore({
    state: {
        posts: [

            {
                "userId": 1,
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
                "userId": 1,
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
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
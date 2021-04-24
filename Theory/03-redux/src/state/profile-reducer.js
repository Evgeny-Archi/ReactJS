const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {id: 1, message: 'First post.', likesCount: 12},
        {id: 2, message: 'Second post.', likesCount: 5},
        {id: 3, message: 'Third post.', likesCount: 0},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const post = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const postChangeCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer
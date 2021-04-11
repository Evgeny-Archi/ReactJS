let rerender = () => {}

const state = {
    profile: {
        posts: [
            {id: 1, message: 'First post.', likesCount: 12},
            {id: 2, message: 'Second post.', likesCount: 5},
            {id: 3, message: 'Third post.', likesCount: 0},
        ],
        newPostText: 'placeholder'
    },
    messages: {
        messages: [
            {id: 1, message: 'first message'},
            {id: 2, message: 'second message'},
            {id: 3, message: 'third message'},
            {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, porro!'},
            {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid assumenda at corporis delectus dolorum eum ipsum nam neque, perferendis quia quibusdam quod reprehenderit sunt, velit veniam veritatis voluptatem, voluptatum!'},
            {id: 6, message: 'first message'}
        ],
        dialogs: [
            {id: 1, name: 'Andrew Skot'},
            {id: 2, name: 'Dmitry Pak'},
            {id: 3, name: 'Sasha Ivanov'},
            {id: 4, name: 'Sveta Zlatova'},
            {id: 5, name: 'Viktor Sergeevich'},
            {id: 6, name: 'John Doe'},
            {id: 7, name: 'Aleksandr Korolev'},
            {id: 8, name: 'Bob Morgan'},
            {id: 9, name: 'Andrew Cruz'}
        ]
    },
    friends: {
        friendsList: [
            {id: 1, name: 'Andrew Skot'},
            {id: 2, name: 'Dmitry Pak'},
            {id: 3, name: 'Sasha Ivanov'}
        ]
    }
}

export function addPost() {
    const post = {
        id: state.profile.posts.length + 1,
        message: state.profile.newPostText,
        likesCount: 0
    }
    state.profile.posts.push(post)
    state.profile.newPostText = ''

    rerender()
}

export function updateNewPostText(text) {
    state.profile.newPostText = text
    rerender()
}

export function subscribe(observer) {
    rerender = observer
}

export default state
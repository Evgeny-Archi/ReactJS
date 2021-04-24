const UPDATE_NEW_DIALOGS_TEXT = 'UPDATE-NEW-DIALOGS-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
        messages: [
            {id: 1, message: 'first message'},
            {id: 2, message: 'second message'},
            {id: 3, message: 'third message'},
            {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, porro!'},
            {
                id: 5,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid assumenda at corporis delectus dolorum eum ipsum nam neque, perferendis quia quibusdam quod reprehenderit sunt, velit veniam veritatis voluptatem, voluptatum!'
            },
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
        ],
        newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_DIALOGS_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        case SEND_MESSAGE:
            const message = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, message],
            }
        default:
            return state
    }
}

export const dialogsInputCreator = (text) => ({
    type: UPDATE_NEW_DIALOGS_TEXT,
    text: text
})
export const addMessageDialogCreator = () => ({
    type: SEND_MESSAGE
})

export default dialogsReducer
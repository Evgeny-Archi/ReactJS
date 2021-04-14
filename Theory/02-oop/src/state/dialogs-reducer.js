const UPDATE_NEW_DIALOGS_TEXT = 'UPDATE-NEW-DIALOGS-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_DIALOGS_TEXT:
            state.newMessageText = action.text
            return state
        case SEND_MESSAGE:
            const message = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(message)
            state.newMessageText = ''
            return state
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
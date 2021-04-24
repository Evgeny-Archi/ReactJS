import React from "react"
import {connect} from "react-redux"
import Dialogs from './Dialogs'
import {addMessageDialogCreator, dialogsInputCreator} from "../../../state/dialogs-reducer"

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: (text) => {
            dispatch(dialogsInputCreator(text))
        },
        onSendMessage: () => {
            dispatch(addMessageDialogCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

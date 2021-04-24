import React from 'react'
import Messages from "./Messages"
import {addMessageDialogCreator, dialogsInputCreator} from "../../../../state/dialogs-reducer";
import StoreContext from "../../../../StoreContext";

export default function MessagesContainer() {

    return <StoreContext.Consumer>
        { (store) => {
            const inputChangeHandler = (text) => {
                store.dispatch(dialogsInputCreator(text))
            }

            const addNewMessage = () => {
                store.dispatch(addMessageDialogCreator())
            }

            return (
                <Messages data={store.getState().dialogsPage.messages} onChangeInput={inputChangeHandler} onAddedMessage={addNewMessage} newMessageText={store.getState().dialogsPage.newMessageText}  />
            )
        }
    }
    </StoreContext.Consumer>
}
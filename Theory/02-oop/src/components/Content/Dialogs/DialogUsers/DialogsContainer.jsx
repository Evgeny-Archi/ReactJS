import DialogUsers from './DialogUsers'
import React from "react"
import StoreContext from "../../../../StoreContext";

export default function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            { (store) => {
                store.getState().dialogsPage.dialogs.map(dialog => <DialogUsers key={dialog.id} name={dialog.name}
                                                                                id={dialog.id}/>)
            }
        }
        </StoreContext.Consumer>
    )
}
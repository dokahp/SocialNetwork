import { connect } from "react-redux";
import Messages from './Messages';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/messages-reducer";


const mapStateToProps = (state) => {
    return {
        dialog: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddMessage: (href) => dispatch(addMessageActionCreator(href)),
        handleOnMessageChange: (message) => dispatch(updateNewMessageTextActionCreator(message))
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
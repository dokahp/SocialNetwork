import { connect } from "react-redux";
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer;
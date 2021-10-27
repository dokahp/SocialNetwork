import { connect } from "react-redux";
import MyFriends from "./MyFriends";


const mapStateToProps = (state) => {
    return {
        allFriends: state.friendsPage.allFriends
    }
}

let MyFriendsContainer = connect(mapStateToProps)(MyFriends)

export default MyFriendsContainer;
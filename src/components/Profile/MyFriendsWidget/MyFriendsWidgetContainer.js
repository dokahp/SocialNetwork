import { connect } from "react-redux"
import MyFriendsWidget from "./MyFriendsWidget"


const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.allFriends
    }
}

let MyFriendsWidgetContainer = connect(mapStateToProps)(MyFriendsWidget)

export default MyFriendsWidgetContainer
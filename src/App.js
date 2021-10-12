import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Switch, useParams } from 'react-router-dom';
import MyFriends from './components/MyFriends/MyFriends';
import Messages from './components/Dialogs/Messages/Messages'

let App = (props) => {
    return (
        <div className='container'>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <Navigation />
                <Route render={() => <Profile posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} />} exact path='/' />
                <Route render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} />} exact path="/dialogs" />
                <Route render={() => <MyFriends allFriends={props.state.friendsPage.allFriends} />} path="/friends" />
                <Route render={() => <Messages />} exact path="/dialogs/96381471"/>
            </div>
            <footer></footer>
        </div>
    )
};




export default App
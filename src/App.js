import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import MyFriends from './components/MyFriends/MyFriends';


let App = (props) => {
    return (
        <BrowserRouter>
        <div className='container'>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <Navigation />
                <Route render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost} />} exact path='/' />
                <Route render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}/>} path="/dialogs" />
                <Route render={() => <MyFriends allFriends={props.state.friendsPage.allFriends} />} path="/friends" />
            </div>  
            <footer></footer>
        </div>
        </BrowserRouter>
    )
};


export default App
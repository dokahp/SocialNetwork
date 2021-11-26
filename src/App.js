import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import MyFriendsContainer from './components/MyFriends/MyFriendsContainer';
import MessagesContainer from './components/Dialogs/Messages/MessagesContainer';
import WeatherContainer from './components/Weather/WeatherContainer';

let App = (props) => {
    return (
        <div className='container'>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <Navigation />
                <Route render={() => <Profile />} exact path='/' />
                <Route render={() => <DialogsContainer />} exact path="/dialogs" />
                <Route render={() => <MyFriendsContainer />} path="/friends" />
                <Route render={() => <MessagesContainer/>} exact path="/dialogs/96381471"/>
                <Route render={() => <WeatherContainer />} exact path="/weather" />
            </div>
            <footer></footer>
        </div>
    )
};




export default App
import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messagesReducer,
    friendsPage: friendsReducer
});

let store = createStore(reducers);

export default store;
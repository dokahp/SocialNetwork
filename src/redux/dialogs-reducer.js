const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']


let addMessage = (state, profileId) => {
    debugger;
    let newMessage = {
        id: Number(state.messages[profileId].at(-1).id) + 1,
        logo: '/img/Dialog/vitaliy.jpg',
        name: "Виталий",
        message: state.messages.newMessageText,
        date: getFullDateWithTime()
    }
    state.messages[profileId].push(newMessage);
    state.messages.newMessageText = '';
}

let getFullDateWithTime = () => {
    let newDate = new Date();
    return `${newDate.getDate()} 
        ${MONTH[newDate.getMonth()]} 
        ${newDate.getFullYear()} 
        ${newDate.getHours()}:${newDate.getMinutes()}`
}
let updateNewMessageText = (state, messageText) => {
    state.messages.newMessageText = messageText;
}

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            debugger
            addMessage(state, action.profile)
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            updateNewMessageText(state, action.message)
            return state
        default:
            return state;

    }
}

export const addMessageActionCreator = (profile) => ({type: ADD_MESSAGE, profile: profile});
export const updateNewMessageTextActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: message})


export default dialogsReducer;
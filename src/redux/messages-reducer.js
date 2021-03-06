const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

const initialState = {
    dialogs: [
        { id: 1, 'logo': "/img/Dialog/tanya.jpg", 'name': "Alesya Shulyakovskaya", 'text': "Привет", 'date': "9 июня", 'profileId': "96381471" },
        { id: 2, 'logo': "/img/Dialog/misha.jpg", 'name': "Михаил Одинцов", 'text': "Учу js", 'date': "8 июня", 'profileId': "962311471" },
        { id: 3, 'logo': "/img/Dialog/alina.jpg", 'name': "Алина Адамович", 'text': "Спокойной ночи", 'date': "8 июня", 'profileId': "145307652" },
        { id: 4, 'logo': "/img/Dialog/dima.jpg", 'name': "Дмитрий Русак", 'text': "Сайт опять не работает. Выдает ошибку SQL", 'date': "8 июня", 'profileId': "123565" }
    ],
    messages: {
        '96381471': [
            { id: 1, 'logo': "/img/Dialog/tanya.jpg", name: "Alesya Shulyakovskaya", message: 'Привет, давно не виделись', date: '30 апреля 2020 12:53' },
            { id: 2, 'logo': "/img/Dialog/tanya.jpg", name: "Alesya Shulyakovskaya", message: 'Я скоро буду в Минске, можем встретиться', date: '30 апреля 2020 12:53' },
            { id: 3, 'logo': "/img/Dialog/vitaliy.jpg", name: "Виталий", message: 'Я пока занят, учу программирование, может завтра?', date: '13 октября 2021 02:53' },
        ],
        newMessageText: '',
    }
}

let addMessage = (state, profileId) => {
    let newMessage = {
        id: Number(state.messages[profileId].at(-1).id) + 1,
        logo: '/img/Dialog/vitaliy.jpg',
        name: "Виталий",
        message: state.messages.newMessageText,
        date: getFullDateWithTime()
    }
    state.messages[profileId].push(newMessage);
    // Изменение последнего сообщения и его даты на странице диалогов
    state.dialogs = state.dialogs.map((el) => {
        if (el.profileId === profileId) {
            return {
                ...el,
                'text': state.messages.newMessageText,
                'date': `${new Date().getDate()} ${MONTH[new Date().getMonth()]}`
            }
        }
        return el
    })

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

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            addMessage(state, action.profileId)
            return JSON.parse(JSON.stringify(state));
        case UPDATE_NEW_MESSAGE_TEXT:
            updateNewMessageText(state, action.message)
            return JSON.parse(JSON.stringify(state));
        default:
            return state;
    }
}

export const addMessageActionCreator = (profileId) => ({ type: ADD_MESSAGE, profileId: profileId });
export const updateNewMessageTextActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, message: message })


export default messagesReducer;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

//Начальное состояние стейта
const initialState = {
    "posts": [
        { id: '1', 'text': "Лучшие инвестиции - в себя!", 'like': '1000', date: "20 сентября 2021" },
        { id: '2', 'text': "Копирайтинг: как не съесть собаку. Создаем тексты, которые продают", 'like': '1', date: "20 сентября 2021" },
        { id: '3', 'text': "Создаем тексты, которые продают", 'like': '1', date: "20 сентября 2021" },
        { id: '4', 'text': "Проверка связи", 'like': '0', date: "20 сентября 2021" },
    ],
    newPostText: '',
}
//переписать добавление лайков. Добавлять id того кто лайкнул и считать количество
let addPost = (state) => {
    let newPost = {
        id: Number(state.posts.at(-1).id) + 1,
        text: state.newPostText,
        like: '0',
        date: getDate(),
    };
    state.posts.unshift(newPost);
    state.newPostText = '';
}
let getDate = () => {
    let newDate = new Date();
    return `${newDate.getDate()} ${MONTH[newDate.getMonth()]} ${newDate.getFullYear()}`
}
let updateNewPostText = (state, newText) => {
    state.newPostText = newText;
}


const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newState = {...state}
            newState.posts = [...state.posts]
            addPost(newState)
            return newState
        }
        case UPDATE_NEW_POST_TEXT: {
            let newState = {...state}
            updateNewPostText(newState, action.newText)
            return newState;
        }
        default:
            return state       
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
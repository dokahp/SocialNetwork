const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']


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


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            addPost(state)
            return state
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(state, action.newText)
            return state;
        default:
            return state       
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
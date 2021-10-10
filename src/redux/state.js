const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
let store = {
    _state: {
        profilePage: {
            "posts": [
                { id: '1', 'text': "Лучшие инвестиции - в себя!", 'like': '1000', date: "20 сентября 2021" },
                { id: '2', 'text': "Копирайтинг: как не съесть собаку. Создаем тексты, которые продают", 'like': '1', date: "20 сентября 2021" },
                { id: '3', 'text': "Создаем тексты, которые продают", 'like': '1', date: "20 сентября 2021" },
                { id: '4', 'text': "Проверка связи", 'like': '0', date: "20 сентября 2021" },
            ],
            newPostText: '',
        },
        dialogsPage: {
            "dialogs": [
                { 'logo': "/img/Dialog/tanya.jpg", 'name': "Alesya Shulyakovskaya", 'text': "Привет", 'date': "9 июня", 'id': "96381471" },
                { 'logo': "/img/Dialog/misha.jpg", 'name': "Михаил Одинцов", 'text': "Учу js", 'date': "8 июня", 'id': "962311471" },
                { 'logo': "/img/Dialog/alina.jpg", 'name': "Алина Адамович", 'text': "Целую тебя", 'date': "8 июня", 'id': "962311471" },
                { 'logo': "/img/Dialog/dima.jpg", 'name': "Дмитрий Русак", 'text': "Сайт опять не работает. Выдает ошибку SQL", 'date': "8 июня", 'id': "123565" }
            ]
        },
        friendsPage: {
            allFriends: [
                { 'id': 1, 'logo': 'img/MyFriends/alina.jpg', 'name': 'Алина Адамович', 'pageLink': '/id145307652', 'eduJob': 'ОАО "Белагропромбанк"', 'writeLink': 'write145307652' },
                { 'id': 2, 'logo': 'img/MyFriends/denis.jpg', 'name': 'Денис Пчелко', 'pageLink': 'id251508405', 'eduJob': 'БГЭУ (бывш. БГИНХ)', 'writeLink': 'write251508405' },
                { 'id': 3, 'logo': 'img/MyFriends/veronika.jpg', 'name': 'Вероника Гурбан', 'pageLink': 'id16178475', 'eduJob': 'Табак Инвест', 'writeLink': 'write16178475' },
                { 'id': 4, 'logo': 'img/MyFriends/alesya.jpg', 'name': 'Alesya Shulyakovskaya', 'pageLink': 'id96381471', 'eduJob': 'РУТ (МИИТ) (бывш. МГУПС Императора Николая II)', 'writeLink': 'write96381471' },
                { 'id': 5, 'logo': 'img/MyFriends/vitalik.jpg', 'name': 'Виталий Корбут', 'pageLink': 'id27715533', 'eduJob': '', 'writeLink': 'write27715533' },
                { 'id': 6, 'logo': 'img/MyFriends/andrey.jpg', 'name': 'Андрей Томский', 'pageLink': 'id32661050', 'eduJob': '', 'writeLink': 'write32661050' },
                { 'id': 7, 'logo': 'img/MyFriends/dima.jpg', 'name': 'Дмитрий Русак', 'pageLink': 'id21214444', 'eduJob': 'не указан', 'writeLink': 'write21214444' },
                { 'id': 8, 'logo': 'img/MyFriends/misha.jpg', 'name': 'Михаил Одинцов', 'pageLink': 'id31834394', 'eduJob': 'Aplana software', 'writeLink': 'write31834394' },
            ],

        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },
    _callSubscriber() {
        console.log('State changed');
    },
    _addPost() {
        let newPost = {
            id: Number(this._state.profilePage.posts.at(-1).id) + 1,
            text: this._state.profilePage.newPostText,
            like: '0',
            date: this._getDate(),
        };
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _getDate() {
        let newDate = new Date();
        return `${newDate.getDate()} ${MONTH[newDate.getMonth()]} ${newDate.getFullYear()}`
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        }
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default store;
// window.store = store;

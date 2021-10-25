import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";


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
            ]
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
        this._callSubscriber(this._state)
    }
}



export default store;


const initialState = {
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

const friendsReducer = (state=initialState, action) => {
    return state
}

export default friendsReducer;
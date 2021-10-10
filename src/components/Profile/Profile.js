import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';



let Profile = (props) => {
    return (
        <main className="col-10 mt-3">
            <div className='row justify-content-end'>
                <div className={`${style.profile_logo} col-3 d-flex flex-column`}>
                    <img src='img/Profile/profileImg.jpg' />
                    <a href="#">Редактировать</a>
                </div>
                <div className={`${style.profile_aboutMe} col-9 ms-3`}>
                    <div className={`${style.separator} d-flex justify-content-between`}>
                        <h1>Виталий Дреко</h1>
                        <div className={style.profile_aboutMe_online}>Online</div>
                    </div>
                    <div className={`${style.profile_info_row} d-flex`}>
                        <div className={style.profile_info_item}>День Рождения:</div>
                        <div className={style.profile_info_data}>8 июня</div>
                    </div>
                    <div className={`${style.profile_info_row} d-flex`}>
                        <div className={style.profile_info_item}>Город:</div>
                        <div className={style.profile_info_data}>Минск</div>
                    </div>
                    <div className={`${style.profile_info_row} d-flex`}>
                        <div className={style.profile_info_item}>Образование:</div>
                        <div className={style.profile_info_data}>БГЭУ</div>
                    </div>
                    <div className={`${style.profile_moreInfo} d-flex justify-content-center`}>
                        <a href="#">Показать подробную информацию</a>
                    </div>
                    <div className={style.separator}></div>
                    <ul className={`${style.counts_module} d-flex justify-content-around`}>
                        <li>
                            <a href="">
                                <div className={style.counts_module_count}>193</div>
                                <div className={style.counts_module_label}>друга</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={style.counts_module_count}>132</div>
                                <div className={style.counts_module_label}>фотографии</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={style.counts_module_count}>23</div>
                                <div className={style.counts_module_label}>отметки</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={style.counts_module_count}>78</div>
                                <div className={style.counts_module_label}>видеозаписей</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={style.counts_module_count}>252</div>
                                <div className={style.counts_module_label}>аудиозаписи</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-end">
                    <div className={`${style.myPost} col-9`}>
                        <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
                    </div>
                </div>
        </main>)
};

export default Profile;
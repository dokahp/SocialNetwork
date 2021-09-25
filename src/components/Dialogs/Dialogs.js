import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css';



let Dialogs = (props) => {
    let DialogItemsComponents = props.dialogs.map(el => {
        return <Dialog logo={el.logo} name={el.name} text={el.text} date={el.date} id={el.id} />
    });
    return (
        <main className="col-10 mt-3">
            <div className='row justify-content-end'>
                <div className={`${style.dialogs_wrapper} col-12`}>

                    {DialogItemsComponents}
                </div>
            </div>
        </main>
    )
};

export default Dialogs;
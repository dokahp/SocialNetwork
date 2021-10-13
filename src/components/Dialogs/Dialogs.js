import Dialog from './Dialog/Dialog';
import style from './Dialogs.module.css';



let Dialogs = (props) => {
    let DialogItemsComponents = props.dialogs.dialogs.map(el => {
        return <Dialog key={el.id} logo={el.logo} name={el.name} text={el.text} date={el.date} profileId={el.profileId}  />
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
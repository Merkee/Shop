import style from './Contacts.module.css';

let Contacts = () => {
    return(
        <div className={style.Contacts}>
            <div className={style.PhonesBox}>
                <div className={style.Title}>
                    <img src="https://s1.iconbird.com/ico/2013/8/429/w512h5121377939352185074notebookstreamline.png"/>
                    <h2>Телефоны</h2>
                </div>
                <div className={style.Phones}>
                    <div className={style.PhonesGrid}>
                        <ul>
                            <li>
                                
                            </li>
                        </ul>                    
                    </div>
                    <div className={style.PhonesGrid}>
                        s                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
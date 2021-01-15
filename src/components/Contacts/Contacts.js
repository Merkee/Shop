import style from './Contacts.module.css';
import ph from './Phones.png';

let Contacts = () => {
    return(
        <div className={style.Contacts}>
            <div className={style.PhonesBox}>
                <div className={style.Title}>
                    <h2>Отдел продаж</h2>
                </div>
                <div className={style.Phones}>
                    <div className={style.PhonesGrid}>
                        <ul>
                            <li>
                                <div className={style.TitlePhones}>Отдел сбыта</div>
                                <a className={style.ItemPhones} href="tel:+375772281337">+375772281337</a>
                            </li>
                            <li>
                                <div className={style.TitlePhones}>Отдел маркетинга</div>
                                <a className={style.ItemPhones} href="tel:+375772281337">+375772281337</a>
                            </li>
                            <li>
                                <div className={style.TitlePhones}>Начальник отдела продаж</div>
                                <div className={style.FIO}>Стома Марина Вячеславовна</div>
                                <a className={style.ItemPhones} href="tel:+375772281337">+375772281337</a>
                            </li>
                            <li>
                                <div className={style.TitlePhones}>Национальный менеджер по продажам</div>
                                <div className={style.FIO}>Феминист Анна Георгиевна</div>
                                <a className={style.ItemPhones} href="tel:+375772281337">+375772281337</a>
                            </li>
                            <li>
                                <div className={style.TitlePhones}>Первый зам.директора (по экономике и маркетингу)</div>
                                <div className={style.FIO}>Сачевичик Анна Мечеславовна</div>
                                <a className={style.ItemPhones} href="tel:+375772281337">+375772281337</a>
                            </li>
                            <li>
                                <div className={style.TitlePhones}>Начальник отдела внешнеэкономической деятельности</div>
                                <div className={style.FIO}>Василевич Алла Григорьевна</div>
                                <a className={style.ItemPhones} href="tel:+375772281337">+375772281337</a>
                            </li>
                        </ul>                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
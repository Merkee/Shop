import style from './Contacts.module.css';
import sls from './Sales.png';
import dlvr from './Delivery.png';
import spl from './Supply.png';
import ps from './Personnel.png';
import ph from './Phone.png';

let Contacts = () => {
    return(
        <div className={style.Contacts}>
            <div className={style.Phones}>
                <div className={style.Sales}>
                    <div className={style.Title}>
                        <img src={sls}/>
                        <h2>Отдел продаж</h2>
                    </div>
                    <ul>
                        <li>
                            <div className={style.TitlePhones}>Отдел сбыта</div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375292241357">+375292241357</a>
                            </div>
                        </li>
                        <li>
                            <div className={style.TitlePhones}>Отдел маркетинга</div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375772681238">+375772681238</a>
                            </div>
                        </li>
                        <li>
                            <div className={style.TitlePhones}>Начальник отдела продаж</div>
                            <div className={style.Description}>Стома Марина Вячеславовна</div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375172531437">+375172531437</a>
                            </div>
                        </li>
                        <li>
                            <div className={style.TitlePhones}>Национальный менеджер по продажам</div>
                            <div className={style.Description}>Феминист Анна Георгиевна</div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375112181637">+375112181637</a>
                            </div>
                        </li>
                        <li>
                            <div className={style.TitlePhones}>Первый зам.директора (по экономике и маркетингу)</div>
                            <div className={style.Description}>Сачевичик Анна Мечеславовна</div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375876285321">+375876285321</a>
                            </div>
                        </li>
                        <li>
                            <div className={style.TitlePhones}>Начальник отдела внешнеэкономической деятельности</div>
                            <div className={style.Description}>Василевич Алла Григорьевна</div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375722241381">+375722241381</a>
                            </div>
                        </li>
                    </ul>                    
                </div>
                <div className={style.Delivery}>
                    <div className={style.Title}>
                        <img src={dlvr}/>
                        <h2>Отдел доставки</h2>
                    </div>
                        <ul>
                            <li>
                                <div className={style.Description}>Менеджер по закупке</div>
                                <div className={style.PhoneNums}>
                                    <img src={ph}/>
                                    <a className={style.ItemPhones} href="tel:+375772281337">+375772281337</a>
                                </div>
                                <div className={style.PhoneNums}>
                                    <img src={ph}/>
                                    <a className={style.ItemPhones} href="tel:+375773286335">+375773286335</a>
                                </div>
                                <div className={style.PhoneNums}>
                                    <img src={ph}/>
                                    <a className={style.ItemPhones} href="tel:+375112221237">+375112221237</a>
                                </div>
                            </li>
                        </ul>
                </div>
                <div className={style.Supply}>
                    <div className={style.Title}>
                        <img src={spl}/>
                        <h2>Отдел снабжения</h2>
                    </div>
                    <ul>
                        <li>
                            <div className={style.Description}>Телефоны для заказа продукции</div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375742251327">+375742251327</a>
                            </div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375272485631">+375272485631</a>
                            </div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375772287788">+375772287788</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.Personnel}>
                    <div className={style.Title}>
                        <img src={ps}/>
                        <h2>Отдел кадров</h2>
                    </div>
                    <ul>
                        <li>
                            <div className={style.Description}>Телефоны отдела кадров</div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375372581434">+375372581434</a>
                            </div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375752271211">+375752271211</a>
                            </div>
                            <div className={style.PhoneNums}>
                                <img src={ph}/>
                                <a className={style.ItemPhones} href="tel:+375732251555">+375732251555</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
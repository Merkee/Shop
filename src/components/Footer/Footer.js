import style from './Footer.module.css';

const Footer = () => {
    return(
      <footer className={style.Footer}>
        <div className={style.Copyring}>
          © 2009—2016 ОАО «БАРАНОВИЧХЛЕБОПРОДУКТ»<br/>
          Республика Беларусь, г. Барановичи, ул. 50 лет БССР, д. 21
        </div>
      </footer>
    );
}

export default Footer;
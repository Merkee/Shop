import style from './Footer.module.css';

const Footer = () => {
    return(
      <footer className={style.Footer}>
        <p className={style.Copyring}>
          © 2009—2016 ОАО «БАРАНОВИЧХЛЕБОПРОДУКТ»<br/>
          Республика Беларусь, г. Барановичи, ул. 50 лет БССР, д. 21
        </p>
      </footer>
    );
}

export default Footer;
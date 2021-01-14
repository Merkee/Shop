import SOffer from './SOffer/SOffer';
import News from './News/News';

import style from './Main.module.css';

const Main = () => {
    return(
      <div className={style.Main}>
        <News/>
      </div>
    );
}

export default Main;
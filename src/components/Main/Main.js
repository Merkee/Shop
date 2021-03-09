import Slider from './Slider/Slider';
import News from './News/News';

import style from './Main.module.css';
import Info from './Info/Info';
import Discount from './Discount/Discount';
import Guarantees from './Guarantees/Guarantees';

const Main = () => {
    return(
      <div className={style.Main}>
        <div className={style.FloatBars}>
          <Info/>
          <Guarantees/>
          <Discount/>
        </div>
        <News/>
      </div>
    );
}

export default Main;
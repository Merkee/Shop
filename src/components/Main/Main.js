import Slider from './Slider/Slider';
import News from './News/News';

import style from './Main.module.css';

let gs = async () => {
  let response = await fetch("/filterProducts", {
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"type": "This is my request"})
  });
  let data = await response.json();
  console.log(data);
}

gs();

const Main = () => {
    return(
      <div className={style.Main}>
        <News/>
      </div>
    );
}

export default Main;
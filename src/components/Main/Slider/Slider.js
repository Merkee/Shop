import { React } from 'react';
import style from './Slider.module.css';
import flr from './flour.png';

const Slider = () => {

    let sliderElement = React.createRef();
    let sliderTrackElement = React.createRef();
    let sliderItemElement = React.createRef();
    const itemsCount = 5;
    const itemWidth = sliderElement.current.clientWidth;
    const movePosition = itemWidth;

    sliderItemElement.current.style.minWidth = `${itemWidth}px`;

        return(
            <div ref={sliderElement} className={style.Slider}>
            <div ref={sliderTrackElement} className={style.SliderTrack}>
                <div ref={sliderItemElement} className={style.SliderItem}>
                    <div className={style.Description}>
                        <div className={style.Title}>Мука</div>
                        <div className={style.SubTitle}>Мука «Гаспадар» всех марок и сортов.</div>
                    </div>
                    <img src={flr}/>
                </div>
                <div className={style.SliderItem}>
                    <div className={style.Description}>
                        <div className={style.Title}>Мучные полуфабрикаты</div>
                        <div className={style.SubTitle}>Мука «Гаспадар» всех марок и сортов.</div>
                    </div>
                    <img src={flr}/>
                </div>
                <div className={style.SliderItem}>
                    <div className={style.Description}>
                        <div className={style.Title}>Крупы</div>
                        <div className={style.SubTitle}>Мука «Гаспадар» всех марок и сортов.</div>
                    </div>
                    <img src={flr}/>
                </div>
                <div className={style.SliderItem}>
                    <div className={style.Description}>
                        <div className={style.Title}>Здоровое питание</div>
                        <div className={style.SubTitle}>Мука «Гаспадар» всех марок и сортов.</div>
                    </div>
                    <img src={flr}/>
                </div>
                <div className={style.SliderItem}>
                    <div className={style.Description}>
                        <div className={style.Title}>Комбикорма</div>
                        <div className={style.SubTitle}>Мука «Гаспадар» всех марок и сортов.</div>
                    </div>
                    <img src={flr}/>
                </div>
            </div>
        </div>
        );
}

export default Slider;
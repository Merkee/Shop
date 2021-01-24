import style from './Slider.module.css';
import flr from './flour.png';
import { Component } from 'react';

class Slider extends Component {

    render(){
        return(
            <div className={style.Slider}>
            <div className={style.SliderTrack}>
                <div className={style.SliderItem}>
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
}

export default Slider;
import { Component } from "react";
import { NavLink } from 'react-router-dom';
import style from './CategoryDropdown.module.css';

class CategoryDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {isOpened: false};
    }

    toggleState(){
        this.setState({isOpened: !this.state.isOpened});
    }

    render() {
        let dropdownText;
        if(this.state.isOpened) {
            dropdownText = (
                <div className={style.DropMenu}>
                    Мы<br/>
                    Тут<br/>
                    Не<br/>
                    Страпоны<br/>
                    Продаём<br/>
                </div>);
        }
        console.log('isOpened', this.state.isOpened);
        return (
            <li onMouseOver={this.toggleState.bind(this)} onMouseOut={this.toggleState.bind(this)}>
            <NavLink to="/Catalog">
                Каталог
                {dropdownText}
            </NavLink>
            </li>
        );
    }
}

export default CategoryDropdown;
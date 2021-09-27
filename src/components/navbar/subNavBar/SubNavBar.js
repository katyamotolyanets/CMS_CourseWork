import React, {Component} from "react";
import '../../../App.scss';
import {Link} from "react-router-dom";

class NavBarr extends Component{
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><Link className="link" to={{pathname: `/main/`}}>ГЛАВНАЯ</Link></li>
                    <li><Link className="link" to={{pathname: `/theory/`}}>ТЕОРЕТИЧЕСКИЕ СВЕДЕНИЯ</Link>
                    </li>
                    <li><Link className="link" to={{pathname: `/structure/`}}>СТРУКТУРА УСТАНОВКИ</Link>
                    </li>
                    <li><Link className="link" to={{pathname: `/simulator/`}}>СИМУЛЯТОР УСТАНОВКИ</Link>
                    </li>
                    <li><Link className="link" to={{pathname: `/about/`}}>ОБО МНЕ</Link></li>
                </ul>
            </nav>
        )
    }
}


export default NavBarr;
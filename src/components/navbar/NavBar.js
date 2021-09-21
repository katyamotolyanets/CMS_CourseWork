import {Link} from "react-router-dom";
import React, {Component} from "react";
import '../../App.scss';

class NavBar extends Component {
    state = {
        background: "none",
        color: "white"
    }

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({color: "black", background: "white"})
        } else {
            this.setState({color: "white", background: "none"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <nav className="navbar" style={{background: this.state.background}}>
                <ul>
                    <li><Link className="link" to={{pathname: `/main/`}}
                              style={{color: this.state.color}}>ГЛАВНАЯ</Link></li>
                    <li><Link className="link" to={{pathname: `/theory/`}}
                              style={{color: this.state.color}}>ТЕОРЕТИЧЕСКИЕ СВЕДЕНИЯ</Link>
                    </li>
                    <li><Link className="link" to={{pathname: `/structure/`}}
                              style={{color: this.state.color}}>СТРУКТУРА УСТАНОВКИ</Link>
                    </li>
                    <li><Link className="link" to={{pathname: `/simulator/`}}
                              style={{color: this.state.color}}>СИМУЛЯТОР УСТАНОВКИ</Link>
                    </li>
                    <li><Link className="link" to={{pathname: `/about/`}}
                              style={{color: this.state.color}}>ОБО МНЕ</Link></li>
                </ul>
            </nav>
        )
    }
};

export default NavBar;
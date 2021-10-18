import React, {Component} from "react";
import { Link } from "react-router-dom";
import ScrollableAnchor from 'react-scrollable-anchor';
import '../../App.scss';
import ph3 from "../../assets/3.png";
import reflection from "../../assets/reflection.png";
import refraction from "../../assets/refraction.png";
import full_reflection from "../../assets/full_reflection.png";
import laboratory from "../../assets/Laboratory.png";
import NavBar from "../navbar/NavBar";

class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <NavBar/>
                <div className="img-container">
                    <img src={laboratory} alt="Фото"/>
                    <p id="img-header">Определение показателя преломления жидкостей с помощью рефрактометра</p>
                    <a className="more-info" href="#scroll">ПРОКРУТИТЕ ДЛЯ ИЗУЧЕНИЯ</a>
                </div>
                <ScrollableAnchor id={'scroll'}>
                    <div className="main-container">
                        <span id='scroll'>
                            <p id="header">РЕФРАКТОМЕТР</p>
                            <div className="info">
                                <div className="info-photo">
                                    <img src={ph3} alt="Фото"/>
                                </div>
                                <div className="info-text">
                                    <p className="definition">Прибор, позволяющий контролировать
                                        параметры различных веществ...</p>
                                    <p className="definition">с помощью измерения величины
                                        преломления света, анализирует степень отклонения луча света от прямолинейного
                                        направления при переходе из одного вещества в другое</p>
                                    <div id="read_more"><Link to={{pathname: `/theory/`}}>ЧИТАТЬ ПОДРОБНЕЕ</Link></div>
                                </div>
                            </div>
                        </span>
                    </div>
                </ScrollableAnchor>
                <div className="second-container">
                    <div className="blocks">
                        <div className="block">
                            <div className="blocks-poster">
                                <img src={reflection} className="poster-img" alt="Фото"></img>
                            </div>
                            <div className="blocks-header">
                                <p>Закон отражения света</p>
                            </div>
                            <div className="blocks-read">
                                <p><Link className="link" to={{pathname: `/theory/`}}>ЧИТАТЬ</Link></p>
                            </div>
                        </div>
                        <div className="block">
                            <div className="blocks-poster">
                                <img src={refraction} className="poster-img" alt="Фото"></img>
                            </div>
                            <div className="blocks-header">
                                <p>Закон преломления света</p>
                            </div>
                            <div className="blocks-read">
                                <p><Link className="link" to={{pathname: `/theory/`}}>ЧИТАТЬ</Link></p>
                            </div>
                        </div>
                        <div className="block">
                            <div className="blocks-poster">
                                <img src={full_reflection} className="poster-img" alt="Фото"></img>
                            </div>
                            <div className="blocks-header">
                                <p>Явление полного отражения</p>
                            </div>
                            <div className="blocks-read">
                                <p><Link className="link" to={{pathname: `/theory/`}}>ЧИТАТЬ</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="more-info">
                        <p><Link className="link" to={{pathname: `/theory/`}}>БОЛЬШЕ ИНФОРМАЦИИ</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
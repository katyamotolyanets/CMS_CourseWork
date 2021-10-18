import {Component} from "react";
import "../../App.scss";
import SubNavBar from "../navbar/subNavBar/SubNavBar";
import ImageSlider from "../slider/ImageSlider";
import {SliderData} from "../slider/SliderData";
import Canvas from "../../assets/cnvs";
import refractometr from "../../assets/1.jpg"
import {Howler, Howl} from "howler";
import _1 from "../../assets/sounds/_1_1.mp3";
import _2 from "../../assets/sounds/_2.mp3";
import _3 from "../../assets/sounds/_3.mp3";
import _4 from "../../assets/sounds/_4.mp3";
import _5 from "../../assets/sounds/_5.mp3";
import _6 from "../../assets/sounds/_6.mp3";
import _7 from "../../assets/sounds/_7.mp3";
import _8 from "../../assets/sounds/_8.mp3";
import _9 from "../../assets/sounds/_9.mp3";

class StructurePage extends Component {
    SoundPlay = (src) => {
        const sound = new Howl( {
            src
        })
        sound.play();
    }

    render() {
        Howler.volume(1.0)
        return (
            <div className="structure-page">
                <SubNavBar/>
                <div className="container">
                    <div className="header">
                        <p>ФОТО УСТАНОВКИ</p>
                    </div>
                    <div className="slider">
                        <ImageSlider slides={SliderData} />
                    </div>
                    {/*<div className="canvas">
                        <Canvas/>
                    </div>*/}
                    <h1>ОПИСАНИЕ УСТАНОВКИ</h1>
                    <div className="map-block">
                        <div className="map">
                            <img src={refractometr} alt="Фото"/>
                            <button className="btn" id="b1" onClick={() => this.SoundPlay(_1)}>1</button>
                            <button className="btn" id="b2" onClick={() => this.SoundPlay(_2)}>2</button>
                            <button className="btn" id="b3" onClick={() => this.SoundPlay(_3)}>3</button>
                            <button className="btn" id="b4" onClick={() => this.SoundPlay(_4)}>4</button>
                            <button className="btn" id="b5" onClick={() => this.SoundPlay(_5)}>5</button>
                            <button className="btn" id="b6" onClick={() => this.SoundPlay(_6)}>6</button>
                            <button className="btn" id="b7" onClick={() => this.SoundPlay(_7)}>7</button>
                            <button className="btn" id="b8" onClick={() => this.SoundPlay(_8)}>8</button>
                            <button className="btn" id="b9" onClick={() => this.SoundPlay(_9)}>9</button>
                        </div>
                        <div className="map-info">
                            <ol type="1">
                                <li>Металлический корпус</li>
                                <li>Маховик для перемещения изображения</li>
                                <li>Маховик компенсатора</li>
                                <li>Окуляр</li>
                                <li>Рефрактометрический блок</li>
                                <li>Оправа подвижной осветительной призмы</li>
                                <li>Оправа неподвижной измерительной призмы</li>
                                <li>Застёжка для фиксации оправы 6</li>
                                <li>Рукоятка</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StructurePage;
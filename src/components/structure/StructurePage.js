import {Component, useEffect, useState} from "react";
import slide1 from "../../assets/1.jpg"
import slide2 from "../../assets/2.jpg"
import slide3 from "../../assets/3.png"
import "../../App.scss";
import SubNavBar from "../navbar/subNavBar/SubNavBar";
import ImageSlider from "../slider/ImageSlider";
import TheoryPage from "../theory/TheoryPage";
import {SliderData} from "../slider/SliderData";


class StructurePage extends Component {
    render() {
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
                </div>
            </div>
        )
    }
}

export default StructurePage;
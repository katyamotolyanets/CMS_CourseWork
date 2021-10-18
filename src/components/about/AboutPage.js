import React, {Component} from "react";
import '../../App.scss';
import me from "../../assets/me.jpg"
import SubNavBar from "../navbar/subNavBar/SubNavBar";

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page">
                <SubNavBar/>
                <div className="container">
                    <div className="header">
                        <p>ОБО МНЕ</p>
                    </div>
                    <div className="about-info">
                        <div className="image">
                            <img src={me} alt="Фото"/>
                        </div>
                        <div className="info">
                            <h2>Мотолянец Екатерина</h2>
                            <p>студентка 3 курса 1 группы</p>
                            <p>специальности ИСиТ</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;
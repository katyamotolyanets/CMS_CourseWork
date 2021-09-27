import React, {Component} from "react";
import '../../App.scss';
import SubNavBar from "../navbar/subNavBar/SubNavBar";
import reflection from "../../assets/reflection.png";
import refraction from "../../assets/refraction.png";
import full_reflection from "../../assets/full_reflection.png";
import formula from "../../assets/formula.png";

class TheoryPage extends Component {
    render() {
      return (
          <div className="theory-page">
            <SubNavBar/>
              <div className="laws">
                  <div className="law">
                      <div className="header">
                          <p>Закон отражения света</p>
                      </div>
                      <div className="description">
                          <div className="poster-img">
                              <img src={reflection} alt="Фото"/>
                          </div>
                          <div className="info">
                              <p>Угол отражения β равен углу падения α: β = α.</p>
                              <p>Лучи падающий и отраженный находятся в одной плоскости с перпендикуляром,
                                  опущенным на поверхность раздела сред в точку падения.</p>
                          </div>
                      </div>
                  </div>
                  <div className="law">
                      <div className="header">
                          <p>Закон преломления света</p>
                      </div>
                      <div className="description">
                          <div className="poster-img">
                              <img src={refraction} alt="Фото"/>
                          </div>
                          <div className="info">
                              <p>Луч падающий α, луч преломленный β и перпендикуляр,
                                  проведенный к границе раздела в точке падения луча, лежат в одной плоскости.</p>
                              <a href="#" className="formula">Отношение синуса угла падения к синусу угла преломления
                                  есть величина постоянная для данных сред.</a>
                              <div className="formula-div">
                                  <img src={formula} alt="Формула"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="law">
                      <div className="header">
                          <p>Явление полного отражения</p>
                      </div>
                      <div className="description">
                          <div className="poster-img">
                              <img src={full_reflection} alt="Фото"/>
                          </div>
                          <div className="info">
                              <p>Полное внутреннее отражение — внутреннее отражение, при условии,
                                  что угол падения превосходит некоторый критический угол.</p>
                              <p>При этом падающая волна отражается полностью, и значение коэффициента
                                  отражения превосходит <br/> его самые большие значения для полированных поверхностей.</p>
                          </div>
                      </div>
                  </div>
                  <div className="law">
                      <div className="header">
                          <p>Назначение рефрактометра</p>
                      </div>
                      <div className="description">
                          <div className="info" style={{marginLeft: 0}}>
                              <p>В различных отраслях промышленности при проведении каких-либо исследований,
                                  определении физико-химических параметров веществ
                                  или контроле качества готовой продукции необходимо знание показателя преломления света. </p>
                              <p>Для этих целей существует рефрактометр.</p>
                          </div>
                      </div>
                  </div>
                  <div className="law">
                      <div className="header">
                          <p>Принцип функционирования рефрактометра</p>
                      </div>
                      <div className="description">
                          <div className="info" style={{marginLeft: 0}}>
                              <p>Солнечный свет или поток искусственного освещения пронзают как окружающую
                                  нас воздушную среду, так и оптически прозрачные предметы, включая стекло и воду.
                                  Луч последовательно переходит из одной среды в другую и на границе наблюдается практически важный физический
                                  эффект рефракции – искривление направления движения света.  </p>
                              <p>Рефрактометр измеряет концентрацию растворенных в жидкости веществ при помощи светового луча.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="navigation">
                <table>

                </table>
              </div>
          </div>
      ) ;
    }
}

export default TheoryPage;
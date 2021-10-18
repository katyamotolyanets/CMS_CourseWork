import React, {Component} from "react";
import '../../App.scss';
import 'react-fancybox/lib/fancybox.css';
import SubNavBar from "../navbar/subNavBar/SubNavBar";
import Law from "./Law";
import reflection from "../../assets/reflection.png";
import refraction from "../../assets/refraction.png";
import full_reflection from "../../assets/full_reflection.png";
import formula from "../../assets/formula.png";
import absolute_index from "../../assets/absolute_index.gif";
import relative_index from "../../assets/relative_index.png";

class TheoryPage extends Component {
    render() {
        return (
          <div className="theory-page">
            <SubNavBar/>
              <div className="laws">
                  <Law id="reflection"
                       header="Закон отражения света"
                       img={reflection}
                       isFancy={true}
                       first="Угол отражения β равен углу падения α: β = α."
                       second="Лучи падающий и отраженный находятся в одной плоскости с перпендикуляром,
                               опущенным на поверхность раздела сред в точку падения."
                  />
                  <Law id="refraction"
                       header="Закон преломления света"
                       img={refraction}
                       isFancy={true}
                       first="Луч падающий α, луч преломленный β и перпендикуляр,
                              проведенный к границе раздела в точке падения луча, лежат в одной плоскости."
                       formula="Отношение синуса угла падения к синусу угла преломления
                                есть величина постоянная для данных сред."
                       imgF={formula}
                  />
                  <Law id="full_reflection"
                       header="Явление полного отражения"
                       img={full_reflection}
                       isFancy={true}
                       first="Полное внутреннее отражение — внутреннее отражение, при условии,
                              что угол падения превосходит некоторый критический угол."
                       second="При этом падающая волна отражается полностью, и значение коэффициента
                               отражения превосходит"
                       third="его самые большие значения для полированных поверхностей."
                  />
                  <Law id="absolute_index"
                       header="Абсолютный показатель преломления"
                       img={absolute_index}
                       isFancy={true}
                       first="Абсолютный показатель преломления показывает, во сколько раз
                              скорость с света в вакууме больше фазовой скорости υ света в среде."
                       second="Значения показателя преломления характеризуют оптическую плотность среды."
                  />
                  <Law id="relative_index"
                       header="Относительный показатель преломления"
                       img={relative_index}
                       isFancy={true}
                       first="Относительный показатель преломления второй среды относительно первой n21 – физическая величина,
                              показывающая, восколько раз "
                       second="фазовая скорость υ1 распространения света в первой среде больше (или меньше),
                               чем фазовая скорость υ2 распространения света во второй среде."
                  />
                  <Law id="purpose"
                       header="Назначение рефрактометра"
                       first="В различных отраслях промышленности при проведении каких-либо исследований,
                              определении физико-химических параметров веществ
                              или контроле качества готовой продукции необходимо знание показателя преломления света."
                       second="Для этих целей существует рефрактометр."
                  />
                  <Law id="principle"
                       header="Принцип функционирования рефрактометра"
                       first="Солнечный свет или поток искусственного освещения пронзают как окружающую
                              нас воздушную среду, так и оптически прозрачные предметы, включая стекло и воду.
                              луч последовательно переходит из одной среды в другую и на границе наблюдается практически важный физический
                              эффект рефракции – искривление направления движения света. "
                       second="Рефрактометр измеряет концентрацию растворенных в жидкости веществ при помощи светового луча."
                  />


              </div>
              <div className="navigation">
                  <p><a href="#reflection">Закон отражения света</a></p>
                  <p><a href="#refraction">Закон преломление света</a></p>
                  <p><a href="#full_reflection">Явление полного отражения</a></p>
                  <p><a href="#absolute_index">Абсолютный показатель преломления</a></p>
                  <p><a href="#relative_index">Относительный показатель преломления</a></p>
                  <p><a href="#purpose">Назначение рефрактометра</a></p>
                  <p><a href="#principle">Принцип функционирования</a></p>
              </div>
          </div>
      ) ;
    }
}


export default TheoryPage;
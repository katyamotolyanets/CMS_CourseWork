import ReactFancyBox from "react-fancybox";
import React from "react";
import '../../App.scss';

function Law(props) {
    if (props.isFancy) {
        return (
        <div className="law" id={props.id}>
            <div className="header">
                <p>{props.header}</p>
            </div>
            <div className="description" >
                <div className="poster-img">
                    <ReactFancyBox image={props.img}
                                   showCloseBtn={false}>
                    </ReactFancyBox>
                </div>
                <div className="info" style={{marginLeft: 0}}>
                    <p>{props.first}</p>
                    <p>{props.second}</p>
                    <p>{props.third}</p>
                    <a className="formula">{props.formula}</a>
                    <div className="formula-div">
                        <img src={props.imgF} alt="Формула"/>
                    </div>
                </div>
            </div>
        </div>
    ) }
    else {
        return (
            <div className="law" id={props.id}>
                <div className="header">
                    <p>{props.header}</p>
                </div>
                <div className="description" >
                    <div className="info" style={{marginLeft: 0}}>
                        <p>{props.first}</p>
                        <p>{props.second}</p>
                        <p>{props.third}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Law;
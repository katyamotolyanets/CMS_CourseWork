import {Link} from "react-router-dom";
import React from "react";
import '../../App.scss';

function Block(props) {
    return(
        <div className="block">
            <div className="blocks-poster">
                <img src={props.src} className="poster-img" alt="Фото"></img>
            </div>
            <div className="blocks-header">
                <p>{props.header}</p>
            </div>
            <div className="blocks-read">
                <p><Link className="link" to={{pathname: `/theory/`}}>ЧИТАТЬ</Link></p>
            </div>
        </div>
    )
}
export default Block;
import ReactFancyBox from "react-fancybox";
import React from "react";

function Law(props) {
    return (
        <div className="law" id={props.id}>
            <div className="header">
                <p>{props.header}</p>
            </div>
            <div className="description">
                <div className="poster-img">
                    <ReactFancyBox image={props.img}
                                   showCloseBtn={false}>
                    </ReactFancyBox>
                </div>
                <div className="info">
                    <p>{props.info}</p>
                </div>
            </div>
        </div>
    )
}

export default Law;
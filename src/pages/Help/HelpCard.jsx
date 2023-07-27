import React from "react";

function HelpCard(props) {
    return <div className="help-card">
        <div className="logo-icon">
           {props.icon}
        </div>
        <p>{props.title}</p>
        <label>{props.shortdesc}</label>
    </div>
}


export default HelpCard;
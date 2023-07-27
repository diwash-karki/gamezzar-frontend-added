import React from "react";

const Card = (props) => {
    return <div className="card">
        <div className="card-image">
            {
                (props.isComingSoon) && <div className="coming-soon">Coming soon</div>
            }
            
            <div className="favourite">
                <span>&hearts;</span>
                <span>{props.like}</span>
            </div>


        </div>
        <div className="title-card">
            <span><strong>{props.title}</strong></span>
            <label>BSC</label>
        </div>
        <div className="profile-holder">
            <div className="profile-image"></div>
            <div className="profile-txt-holder">
                <label>Owned By</label>
                <strong>{props.owner}</strong>
            </div>
        </div>
        <div className="btn-holder">
            <button className="trade-btn">Trade</button>
            <button className="history-btn">View History</button>
        </div>
    </div>
}

export default Card;
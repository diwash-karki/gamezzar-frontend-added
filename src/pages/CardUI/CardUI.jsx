import React from "react";
import Card from "./Card";
import './CardStyle.css'
function CardUI() {

    return <>
        <div className="select-holder">
            <div>
                <select className="select-btn">
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="domain names">Domain Names</option>
                    <option value="virtual world">Virtual World</option>
                    <option value="trading cards">Trading Cards</option>
                    <option value="sports">Sports</option>
                    <option value="utility">Utility</option>
                </select>
                <select className="select-btn">
                    <option value="trading now">Trading Now</option>
                </select>
                <select className="select-btn">
                    <option value="all items">All Items</option>
                </select>
            </div>
            <div>
                <select className="select-btn">
                    <option value="all games">All Games</option>
                </select>
                <select className="select-btn">
                    <option value="sort by">Sort By</option>
                </select>
            </div>
        </div>
        <div className="card-holder">
            <Card like={15} title="The Reminance of the owner of the world" owner="hero" isComingSoon={false} />
            <Card like={51} title="The Reminance of the owner of the world" owner="hero" isComingSoon={false} />
            <Card like={25} title="The Reminance of the owner of the world" owner="hero" isComingSoon={true} />
            <Card like={35} title="The Reminance of the owner of the world" owner="hero" isComingSoon={false} />
            <Card like={55} title="The Reminance of the owner of the world" owner="hero" isComingSoon={true} />
            <Card like={51} title="The Reminance of the owner of the world" owner="hero" isComingSoon={false} />
            <Card like={15} title="The Reminance of the owner of the world" owner="hero" isComingSoon={false} />
            <Card like={5} title="The Reminance of the owner of the world" owner="hero" isComingSoon={false} />
            <Card like={57} title="The Reminance of the owner of the world" owner="hero" isComingSoon={true} />
            <Card like={65} title="The Reminance of the owner of the world" owner="hero" isComingSoon={false} />
            <Card like={59} title="The Reminance of the owner of the world" owner="hero" isComingSoon={false} />
            <Card like={25} title="The Reminance of the owner of the world" owner="hero" isComingSoon={true} />
        </div>
    </>
}

export default CardUI


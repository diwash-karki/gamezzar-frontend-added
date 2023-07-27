import React from "react";
import IconSearch from "../../components/Icons/searchIcon";
import './HelpCenterStyle.css'
import HelpCard from "./HelpCard";
import IconPaperPlane from "../../components/Icons/planeIcon";
import IconFolderAdd from "../../components/Icons/folderIcon";
import IconBxsCartAlt from "../../components/Icons/cartIcon";
import IconBarChartFill from "../../components/Icons/chartIcon";
import Icon204Link from "../../components/Icons/linkIcon";
import IconProcessor from "../../components/Icons/cpuIcon";
function HelpCenter() {
    return <>
        <div className="help-center-holder">
            <h1>How Can We Help You?</h1>
            <p style={
                {
                    marginTop: "20px",
                    width: "40%",
                    textAlign: "center"
                }
            }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati
                dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
            </p>
            <div className="search-box">
                <input type="search" placeholder="Type your question here" id="search-box" />
                <button className="search-btn">
                    <IconSearch />
                </button>
            </div>
            <p style={
                {
                    marginTop: "20px",
                    width: "40%",
                    textAlign: "center"
                }
            }>
                Or choose a categories to quickly find the help you need  </p>

                <div className="help-card-holder">
                    <HelpCard icon={<IconPaperPlane/>} title="Getting Started" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                    <HelpCard icon={<IconFolderAdd/>} title="Creating" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                    <HelpCard icon={<IconBxsCartAlt/>} title="Buying" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                    <HelpCard icon={<IconBarChartFill/>} title="Selling" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                    <HelpCard icon={<Icon204Link/>} title="Partners" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                    <HelpCard icon={<IconProcessor/>} title="Developers" shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />

                </div>

        </div>
    </>

}


export default HelpCenter;
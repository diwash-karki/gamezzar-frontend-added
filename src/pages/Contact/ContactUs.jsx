import React from "react";
import './ContactUsStyle.css'
function ContactUs() {

    return <div className="contact-holder">
        <div className="contact-image"></div>
        <div className="contact-form">
            <h1>Drop up a message</h1>
            <label>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati
                dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</label>

            <form>
                <div className="contact-input-box">
                    <input type="text" placeholder="Your Full Name" />
                </div>
                <div className="contact-input-box">
                    <input type="email" placeholder="Your Email Address" />
                </div>
                <div className="contact-select-box">
                    <select>
                        <option value="0">Select Subject</option>
                        <option value="1">Subject 1</option>
                    </select>
                </div>
                <div className="contact-textarea-box">
                    <textarea placeholder="Message"></textarea>
                </div>
                <button>Send Message</button>
            </form>
        </div>
    </div>
}


export default ContactUs
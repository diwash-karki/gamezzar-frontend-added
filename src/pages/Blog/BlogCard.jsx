import React from "react";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="blog-image">

            </div>
            <div className="blog-personal-info">
                <div>
                    <div className="blog-personal-image">
                    </div>
                    <div className="blog-personal-name">
                        <label style={{
                            fontSize: "0.9rem",
                            color: "rgba(138, 138, 160, 1)",
                        }}>Post Owner</label>
                        <p><strong>John Doe</strong></p>
                    </div>
                </div>
                <div className="blog-date">
                    <label>Feb 29, 2021</label>
                </div>

            </div>
            <div className="blog-content">
                <strong style={{
                    fontSize: "1.1rem",
                    margin: "50px 0px"

                }}>The Next Big Trend in Crypto</strong>
                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut
                    enim reprehenderit cupidatat labore ad laborum consectetur
                    consequat...</p>
            </div>
            <button className="readmore-btn">Read More</button>
        </div>
    );
};

export default BlogCard;
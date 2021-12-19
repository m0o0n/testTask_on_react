import React from "react"
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

let PostTepmpalte =(props)=>{

    return(
                <div className="content_greed__post_container">
                    <div className="content_greed__post">
                        <div className="post__image_container"><img src={props.imageSource} alt="" /></div>
                        <div className="content_greed__post_paddingBox">
                            <h3 className="post__article">{props.h3Article}</h3>
                            <p className="post__short_text">{props.shortText}</p>
                            <div className="post__readMore_Date">
                                <div className="post__Date">{props.date}</div>
                                <div className="post__readMore"><Link to={`/Article/${props.link}`}>Read More</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default PostTepmpalte
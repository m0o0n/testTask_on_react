import React from "react"
import { connect } from 'react-redux';

let PostTepmpalte =(props)=>{
    console.log(props)
    return(
                <div className="content_greed__post_container">
                    <div className="content_greed__post">
                        <div className="post__image_container"><img src={props.imageSource} alt="" /></div>
                        <div className="content_greed__post_paddingBox">
                            <h3 className="post__article">{props.h3Article}</h3>
                            <p className="post__short_text">{props.shortText}</p>
                            <div className="post__readMore_Date">
                                <div className="post__Date">{props.date}</div>
                                <div className="post__readMore">Read More</div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default PostTepmpalte
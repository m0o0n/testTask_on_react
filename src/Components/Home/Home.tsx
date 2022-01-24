import React from "react";
import { connect } from "react-redux";
//@ts-ignore
import Content from "../Content/Content.tsx";

const Home: React.FC = (props) => {
  return (
    <div className="content">
      {/* <!--!!! LATEST POST !!!--> */}
      <div className="content__last_post" id="last_post">
        <div className="last_post__textContent">
          <h2 className="last_post__article">
            Melbourne Cup loses some shine with crowds trending downwards as animal welfare concerns
            rise
          </h2>
          <p className="last_post__short_text">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that....
          </p>
          <div className="last_post__readMore_Date">
            <div className="last_post__Date">May 20th 2020</div>
            <div className="last_post__readMore">Read More</div>
          </div>
        </div>
        <div className="last_post__image_container">
          <img src="./assets/image2.png" alt="" />
        </div>
      </div>

      <Content />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps)(Home);

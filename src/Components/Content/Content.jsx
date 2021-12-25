import React, { useEffect } from "react";
import { connect } from "react-redux";
import PostTepmpalte from "./PostTemplate";
import { fetchPost } from "../../Redux/ContentReducer";
import PropTypes from "prop-types";

const Content = (props) => {
  useEffect(() => {
    props.fetchPost();
    console.log("Rerender", props.state.ContentReducer);
  }, []);

  console.log(props.Data);
  if (!props.Fetching && !props.state.ContentReducer.data) {
    return <div>Loading</div>;
  } else if (props.Fetching && !props.state.ContentReducer.data) {
    return <div>Loading</div>;
  } else {
    return (
      <div id="content_greed_container">
        <div className="content_greed" id="content_greed">
          {props.state.ContentReducer.data.results.map((p) => {
            return (
              <PostTepmpalte
                key={p.id}
                imageSource={p.fields.thumbnail}
                h3Article={p.webTitle}
                shortText={p.fields.trailText}
                date={p.webPublicationDate}
                link={p.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
};
Content.propTypes = {
  Fetching: PropTypes.bool.isRequired,
  state: PropTypes.object.isRequired,
  Data: PropTypes.object.isRequired,
  fetchPost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    state: state,
    Fetching: state.ContentReducer.Fetching,
    Data: state.ContentReducer.data,
  };
};
export default connect(mapStateToProps, { fetchPost })(Content);

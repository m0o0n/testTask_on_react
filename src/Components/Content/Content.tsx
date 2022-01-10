import React, { useEffect } from "react";
import { connect } from "react-redux";
//@ts-ignore
import PostTepmpalte from "./PostTemplate.tsx";
//@ts-ignore
import { fetchPost } from "../../Redux/ContentReducer.ts";
import PropTypes from "prop-types";
import { AppStateType } from "../../Redux/redux-store";
import { DataType } from "../../Types/ContentReducerDataTypes";


type PropType = {
  state: AppStateType
  Fetching: boolean
  Data: DataType
  fetchPost: Function
}
const Content: React.FC<PropType> = (props) => {
  useEffect(() => {
    props.fetchPost();
    // console.log("Rerender", props.state.ContentReducer);
  }, []);

  console.log(props.Data);
  // @ts-ignore
  if (!props.Fetching && !props.Data) {
    return <div>Loading</div>;
    // @ts-ignore
  } else if (props.Fetching && !props.Data) {
    return <div>Loading</div>;
  } else {
    return (
      <div id="content_greed_container">
        <div className="content_greed" id="content_greed">
          {/* @ts-ignore */}
          {props.Data.results.map((p: any) => {
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

const mapStateToProps = (state: AppStateType) => {
  return {
    state: state,
    // @ts-ignore
    Fetching: state.ContentReducer.Fetching,
    // @ts-ignore
    Data: state.ContentReducer.data
  };
};
export default connect(mapStateToProps, { fetchPost })(Content);

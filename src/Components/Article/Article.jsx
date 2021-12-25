import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Article = (props) => {
  const param = useParams();
  const urlParamValues = Object.values(param);
  const navigate = useNavigate();
  console.log(urlParamValues);
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={goBack}>goBack</button>
      Article
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps)(Article);

import { type } from "os";
import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppStateType } from "../../Redux/redux-store";
type PropType ={
  state: AppStateType
}
const Article: React.FC<PropType> = (props) => {
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

const mapStateToProps = (state: AppStateType ) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps)(Article);

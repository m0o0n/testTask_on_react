import { any } from "prop-types";
import { number } from "prop-types";
import { getData } from "../API/api";
import { initialStateType } from "../Types/ContentReducerDataTypes";

const initialState: initialStateType = {
  data: null,
  Fetching: false,
};
const ContentReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case "getData":
      return {
        ...state,
        data: { ...action.data, results: sortByDate(action.data.results) },
      };
    case "Fetching":
      return {
        ...state,
        Fetching: action.fetching,
      };
    default:
      return state;
  }
};

type setDataType = {
  type: "getData";
  data: object;
};
const setDataAC = (data: object): setDataType => ({ type: "getData", data });
type fetchingType = {
  type: "Fetching";
  fetching: boolean;
};
const fetchingAC = (fetching: boolean): fetchingType => ({ type: "Fetching", fetching });

const sortByDate = (obj: any) => {
  const SortDate = (a: any, b: any) => {
    return new Date(b.webPublicationDate).getTime() - new Date(a.webPublicationDate).getTime();
  };
  return obj.sort(SortDate);
};

export const fetchPost = () => {
  return (dispatch: any) => {
    dispatch(fetchingAC(true));
    getData().then((data: any) => {
      dispatch(setDataAC(data.response));
      dispatch(fetchingAC(false));
    });
  };
};

export default ContentReducer;

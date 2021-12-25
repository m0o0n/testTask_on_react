import { getData } from "../API/api";

const initialState = {
  data: null,
  Fetching: false,
};
const ContentReducer = (state = initialState, action) => {
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

const setDataAC = (data) => ({ type: "getData", data });
const fetchingAC = (fetching) => ({ type: "Fetching", fetching });
const sortByDate = (obj) => {
  const SortDate = (a, b) => {
    return new Date(b.webPublicationDate) - new Date(a.webPublicationDate);
  };
  return obj.sort(SortDate);
};

export const fetchPost = () => {
  return (dispatch) => {
    dispatch(fetchingAC(true));
    getData().then((data) => {
      dispatch(setDataAC(data.response));
      dispatch(fetchingAC(false));
    });
  };
};

export default ContentReducer;

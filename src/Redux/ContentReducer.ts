import { type } from "os";

import { any } from "prop-types";
import { number } from "prop-types";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
//@ts-ignore
import { getData } from "../API/api.ts";
//@ts-ignore
import { dataResultType, DataType, initialStateType } from "../Types/ContentReducerDataTypes.ts";
import { AppStateType, InferActionTypes } from "./redux-store";

const initialState: initialStateType = {
  data: null,
  Fetching: false,
};
const ContentReducer = (state = initialState, action: ActionTypes): initialStateType => {
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

// type setDataType = {
//   type: "getData";
//   data: DataType;
// };
// type fetchingType = {
//   type: "Fetching";
//   fetching: boolean;
// };
// const setDataAC = (data: DataType): setDataType => ({ type: "getData", data });
// const fetchingAC = (fetching: boolean): fetchingType => ({ type: "Fetching", fetching });
type dispatchType = Dispatch<ActionTypes>;
type ActionTypes = InferActionTypes<typeof actions>;
const actions = {
  setDataAC: (data: DataType) => ({ type: "getData", data } as const),
  fetchingAC: (fetching: boolean) => ({ type: "Fetching", fetching } as const),
};

const sortByDate = (obj: Array<dataResultType>) => {
  const SortDate = (a: any, b: any) => {
    return new Date(b.webPublicationDate).getTime() - new Date(a.webPublicationDate).getTime();
  };
  return obj.sort(SortDate);
};

type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
export const fetchPost = (): thunkType => {
  return async (dispatch) => {
    dispatch(actions.fetchingAC(true));
    const data = await getData();
    dispatch(actions.setDataAC(data.response));
    dispatch(actions.fetchingAC(false));
  };
};

export default ContentReducer;

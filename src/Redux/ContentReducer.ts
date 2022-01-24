

import { any } from "prop-types";
import { number } from "prop-types";
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
//@ts-ignore
import { getData } from "../API/api.ts";
import { dataResultType, DataType, initialStateType } from "../Types/ContentReducerDataTypes";
import { AppStateType } from './redux-store';

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



type setDataType = {
  type: "getData";
  data: DataType;
};
const setDataAC = (data: DataType): setDataType => ({ type: "getData", data });

type fetchingType = {
  type: "Fetching";
  fetching: boolean;
};
const fetchingAC = (fetching: boolean): fetchingType => ({ type: "Fetching", fetching });

const sortByDate = (obj: Array<dataResultType>) => {
  const SortDate = (a: any, b: any) => {
    return new Date(b.webPublicationDate).getTime() - new Date(a.webPublicationDate).getTime();
  };
  return obj.sort(SortDate);
};

// type dispatchType = Dispatch<ActionTypes>
type ActionTypes = setDataType | fetchingType;
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>
export const fetchPost = (): thunkType => {
  return async (dispatch) => {
    dispatch(fetchingAC(true));
    const data = await getData();
    dispatch(setDataAC(data.response));
    dispatch(fetchingAC(false));
  };
};

export default ContentReducer;

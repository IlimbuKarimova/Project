import React, { createContext, useContext, useReducer } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { notify, notifyError } from "../Components/Tostify/Toastify";
import { ACTIONS, API, PRODUCTS_LIMIT } from "../Helpers/consts";

export const feedBackContext = createContext();

export const useFeedBackContext = () => {
  return useContext(feedBackContext);
};

const INIT_STATE = {
    products: [],
  };
  
  function reducer(state = INIT_STATE, action) {
    switch (action.type) {
      case ACTIONS.GET_RATINGS:
        return {
          ...state,
          products: action.payload.data,
        };
      case ACTIONS.GET_ONE_PRODUCT:
        return { ...state, oneProd: action.payload };
      default:
        return state;
    }
  }

const FeedbackContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer( reducer, INIT_STATE);
    const navigate = useNavigate();

    const getRatings = async () => {
        try {
          let res = await axios.get(`${API}${window.location.search}`);
          dispatch({
            type: ACTIONS.GET_RATINGS,
            payload: res,
          });
          navigate(-1)
        } catch (err) {
          console.log(err);
        }
      };


      return (
        <feedBackContext.Provider
          value={{
            products: state.products,
            oneProd: state.oneProd,
            getRatings,
          }}
        >
          {children}
        </feedBackContext.Provider>
      )
}

export default FeedbackContextProvider;

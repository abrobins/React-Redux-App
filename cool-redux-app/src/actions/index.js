import axios from "react";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export const pullQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });

  axios
    .get("http://api.icndb.com/jokes/random")
    .then(res => {
      console.log("res", res);
    })
    .catch(err => {
      console.log("err", err);
    });
};

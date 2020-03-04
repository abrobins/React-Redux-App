import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export const pullQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });

  axios
    .get("http://api.icndb.com/jokes/random")
    .then(res => {
      console.log("res", res);
      let quotetext = res.data.value.joke;
      let quotetextfmt = quotetext.replace(/&quot;/g, '\\"');
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: quotetextfmt });
    })
    .catch(err => {
      console.log("err", err);
      //   dispatch({
      //     type: FETCHING_QUOTE_FAILURE,
      //     payload: `${err.response.message}`
      //   });
    });
};

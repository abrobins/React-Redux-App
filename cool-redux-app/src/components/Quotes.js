import React, { useEffect } from "react";
import { connect } from "react-redux";

import { pullQuote } from "../actions";

// const Quotes = ({ quote, isFetching, error }) => {
const Quotes = ({ pullQuote, quote, isFetching, error }) => {
  console.log("quote", quote);
  // console.log("props", props);
  if (isFetching) {
    return <h2>Fetching a quote now.....</h2>;
  }

  return (
    <div>
      <h2>Random Chuck Norris Quote: {quote}</h2>
      <button onClick={pullQuote}>Get random quote</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { pullQuote })(Quotes);

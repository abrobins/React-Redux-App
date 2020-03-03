import React, { useEffect } from "react";
import { connect } from "react-redux";

import { pullQuote } from "../actions";

const Quotes = ({ quote, isFetching, error }) => {
  if (isFetching) {
    return <h2>Fetching a quote now.....</h2>;
  }

  return (
    <div>
      <h2>Random Chuck Norris Quote: </h2>
      <button>Get random quote</button>
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

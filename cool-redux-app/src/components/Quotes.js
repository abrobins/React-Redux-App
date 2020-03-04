import React, { useEffect } from "react";
import { connect } from "react-redux";

import { pullQuote } from "../actions";

import Styled from "styled-components";

const Cards = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Card = Styled.div`
  margin: 2rem 6rem;
  padding: 1rem;
  background-color: #D3D3D3;
  box-shadow: 2px 2px #000000;
  border-radius: 1.5rem;
`;

const Button = Styled.div`
    margin: auto;
    padding: .5rem 1rem;
    border-radius: 1.5rem;
    background-color: #ffc357;
    box-shadow: 2px 2px #d88144;
    color: #084f93;
    font-size: 1.5rem;
    font-weight: bold;
`;

// const Quotes = ({ quote, isFetching, error }) => {
const Quotes = ({ pullQuote, quote, isFetching, error }) => {
  console.log("quote", quote);

  useEffect(() => {
    pullQuote();
  }, [pullQuote]);
  // console.log("props", props);
  if (isFetching) {
    return <h2>Fetching a quote now.....</h2>;
  }

  return (
    <Cards>
      <Card>
        <h3>{quote}</h3>
        <Button onClick={pullQuote}>Get random quote</Button>
      </Card>
    </Cards>
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

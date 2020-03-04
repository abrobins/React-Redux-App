import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS } from "../actions";

const initialState = {
  quote: null,
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_QUOTE_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_QUOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        quote: action.payload
      };
    default:
      return state;
  }
};

// return {
//     ...state,
//     car: {
//       ...state.car,
//       price: state.car.price - action.payload.price,
//       features: state.car.features.filter(
//         item => item.id !== action.payload.id
//       )
//     }
//   };

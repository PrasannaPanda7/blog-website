// type user = {
//     username : string,
//     password : string
// }

import { LOGIN, LOGOUT } from "../constants";

const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem("LoggedinUser") || "0"),
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedInUser: JSON.parse(localStorage.getItem("LoggedinUser") || "0"),
      };
    case LOGOUT:
      localStorage.removeItem("LoggedinUser");
      return {
        ...state,
        loggedInUser: "",
      };
    default:
      return state;
  }
};

export type rootType = ReturnType<typeof rootReducer>;

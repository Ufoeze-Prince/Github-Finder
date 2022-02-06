import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,//mutate the old state to perform change of an action of the state
        loading: true,//change loading to true
      };
    case SEARCH_USERS:
      return {
        ...state,//mutate the old state to perform change of an action of the state
        users: action.payload,//this action assign a payload data from githubapi component
        loading: false,//change loading to false
      };
    case GET_USER:
      return {
        ...state,//mutate the old state to perform change of an action of the state
        user: action.payload,//this action assign a payload data from githubapi component
        loading: false,//change loading to false
      };
      case GET_REPOS: {
      return {
        ...state,//mutate the old state to perform change of an action of the state
        repos: action.payload,//this action assign a payload data from githubapi component
        loading: false,//change loading to false
      };
    }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };

    default:
      return state;
  }
};

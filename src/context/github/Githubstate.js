import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import Githubreducer from "./githubreducer";
import Swal from "sweetalert2";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  //LOAD_USERS,
} from "../Types";

let githubClientId;
let githibClientSecret;
if (process.env.NOD_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githibClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githibClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  //initialize use effect
  //const [users_default, setusers] = useEffect([]);

  const initialstate = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(Githubreducer, initialstate);

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // ///load users by default------------
  // useEffect(() => {
  //   async () => {
  //     setLoading();
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );

  //     dispatch({
  //       type: LOAD_USERS,
  //       payload: res.data.items,
  //     });
  //   };
  // }, []);

  //search user
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githibClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });

    if (res.data.items.length === 0) {
      Swal.fire({
        title: "Error!",
        text: `${text} not found`,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };

  //Get user repos data------------------------
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githibClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //Get user single data------------------------
  const getuser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githibClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getuser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

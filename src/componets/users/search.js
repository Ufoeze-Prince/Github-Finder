import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/Alert/alertContext";

const search = () => {
  const githubContext = useContext(GithubContext);
  const [text, seText] = useState("");
  const { clearUsers } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter Somthing", "danger");
    } else {
      githubContext.searchUsers(text);
      seText("");
    }
  };

  const onChange = (e) => {
    seText(e.target.value);
    // console.log(e.target.value);
  };

  return (

    //   search input starts
    <div className="search">
      <div className="container">
        {/* <!-- Another variation with a button --> */}
        <form onSubmit={onSubmit} className='form'>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            onChange={onChange} value={text}
            placeholder="Search GitHub Users..."
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type='submit'>
              <i className="fa fa-search"></i>
            </button>
            {githubContext.users.length > 0 && (<button type="button" className="btn btn-secondary btn-danger" onClick={clearUsers}>Clear Search  <i class="fa fa-times"></i></button>)}
            
          </div>
        </div>
        </form>
      </div>
    </div>


  );
};

export default search;

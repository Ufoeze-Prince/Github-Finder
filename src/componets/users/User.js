import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const user = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUserRepos, repos, getuser } = githubContext; //pulled out data from react github reducer
  useEffect(() => {
    getuser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    follower,
    following,
    public_repo,
    public_gists,
    hireable,
  } = user; //user data pulled out from api passed through react reducer

  if (loading) return <Spinner />;

  return (
    // <Fragment>
    //   <Link to="/" className="btn btn-light">
    //     Back to search
    //   </Link>
    //   Hireable:{" "}
    //   {hireable ? (
    //     <i className="fas fa-check text-success" />
    //   ) : (
    //     <i className="fas fa-times-circle text-danger" />
    //   )}
    //   <div className="card grid-2">
    //     <div className="all-center">
    //       <img
    //         src={avatar_url}
    //         className="round-img rounded"
    //         alt=""
    //         style={{ Width: "150px" }}
    //       />
    //       <h1>{name}</h1>
    //       <p>{location}</p>
    //     </div>
    //     <div>
    //       {bio && (
    //         <Fragment>
    //           <h3>Bio</h3>
    //           <p>{bio}</p>
    //         </Fragment>
    //       )}
    //       <a href={html_url} className="btn btn-lg btn-primary">
    //         visite Github Profile
    //       </a>
    //       <ul>
    //         <li>
    //           {login && (
    //             <Fragment>
    //               <strong>login: </strong>
    //               {login}
    //             </Fragment>
    //           )}
    //         </li>
    //         <li>
    //           {company && (
    //             <Fragment>
    //               <strong>company: </strong>
    //               {company}
    //             </Fragment>
    //           )}
    //         </li>
    //         <li>
    //           {blog && (
    //             <Fragment>
    //               <strong>blog: </strong>
    //               {blog}
    //             </Fragment>
    //           )}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="card text-center">
    //     <div className="badge badge-primary">followers: {follower}</div>
    //     <div className="badge badge-success">following: {following}</div>
    //     <div className="badge badge-danger">public repos: {public_repo}</div>
    //     <div className="badge badge-dark">public gists: {public_gists}</div>
    //   </div>
    //   <Repos repos={repos}/>
    // </Fragment>

    <div className="container">
      <div className="row">
        <div className="user_card_div col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <Link
                to="/"
                className="btn btn-primary btn-sm active"
                role="button"
                aria-pressed="true"
              >
                <i className="fas fa-angle-double-left"></i>
                Back to Home
              </Link>
              <span className="hire">
                Hireable:{" "}
                {hireable ? (
                  <i className="fas fa-check text-success" />
                ) : (
                  <i className="fas fa-times-circle text-danger" />
                )}
              </span>
            </div>
            <div className="card-body">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <img
                  src={avatar_url}
                  className="img-fluid img-thumbnail"
                  alt="..."
                />
              </div>
              <h5 className="card-title">{name}</h5>
              <p>
                <span className="font-weight-bold">location: </span>
                {location}
              </p>

              {bio && (
                <Fragment>
                  <span>
                    <p>
                      <span className="font-weight-bold">Bio:</span> {bio}
                    </p>
                  </span>
                </Fragment>
              )}
              <a
                href={html_url}
                className="btn btn-primary btn-sm active"
                role="button"
                aria-pressed="true"
              >
                <i className="	fas fa-user-alt"></i>
                Visit GitHub Profile
              </a>
              <ul className="list-group">
                {login && (
                  <Fragment>
                    <li className="list-group-item"><strong>login: </strong>{login}</li>
                  </Fragment>
                )}
                {company && (
                  <Fragment>
                    <li className="list-group-item"><strong>Company: </strong>{company}</li>
                  </Fragment>
                )}
                {blog && (
                  <Fragment>
                    <li className="list-group-item"><strong>Blog: </strong>{blog}</li>
                  </Fragment>
                )}
              </ul>
              <div className="badges col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <span className="badge badge-pill badge-primary">Followers: {follower}</span>
                <span className="badge badge-pill badge-success">Following: {following}</span>
                <span className="badge badge-pill badge-danger">Public Repos: {public_repo}</span>
                <span className="badge badge-pill badge-dark">Public Gists: {public_gists}</span>
              </div>
              <Repos repos={repos}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default user;

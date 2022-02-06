import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    // <div className="card text-center">
    //     <div className="card-header">
    //         <img
    //             src={avatar_url}
    //             alt=""
    //             className="rounded img-thumbnail"
    //             style={{ width: "60px" }}
    //         />
    //         <h3> {login} </h3>
    //         <div>
    //             <Link className="btn btn-primary" to={`/user/${login}`} role="button">More</Link>
    //         </div>
    //     </div>
    // </div>
      <div className="carddiv col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card text-center">
          <div className="card-body">
            <img
              src={avatar_url}
              className="img-fluid img-thumbnail"
              alt="..."
            />

            <p className="card-text">{login}</p>
            <Link to={`/user/${login}`} className="btn btn-primary">
              More
            </Link>
        </div>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;

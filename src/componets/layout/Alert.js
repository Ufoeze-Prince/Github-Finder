import React, { useContext } from "react";
import AlertContext from "../../context/Alert/alertContext";

const alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert, closeAlert } = alertContext;

  const closeAlert1 = () => {
    closeAlert();
  };

  return (
    alert !== null && (
      <div class="search">
        <div class="container">
          <div
            className={`alert alert-${alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <i className="fas fa-info-circle"></i> {alert.msg}
            <button
              type="button"
              onClick={closeAlert1}
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default alert;

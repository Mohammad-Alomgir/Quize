import React from "react";
import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
const Account = () => {
  const { userName, signOut } = useAuth();
  return (
    <div>
      <div className={classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        {!userName ? (
          <Link to="/signup"> Signup </Link>
        ) : (
          <>
            <span>{userName}</span>
            <span
              onClick={() => {
                signOut()
              }}
              className="material-icons-outlined"
              title="Logout"
            >
              {" "}
              logout{" "}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Account;

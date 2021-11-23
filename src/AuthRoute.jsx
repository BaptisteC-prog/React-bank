import React from "react";

import { connect } from "react-redux";

import { Redirect, Route } from "react-router";


const AuthRoute = props => {

  const {  type } = props;
  const isAuthUser = true

  //if (type === "guest" && isAuthUser) return <Redirect to="/" />;

  //if (type === "private" && !isAuthUser) return <Redirect to="/" />;


  return <Route exact {...props} />;

};


const mapStateToProps = ({ isAuthUser }) => ({

  isAuthUser

});


export default connect(mapStateToProps)(AuthRoute);
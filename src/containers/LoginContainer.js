import { withRouter } from "react-router";
import { SignIn } from "../signIn";
import { Component } from "react";
class LoginContainer extends Component {
    constructor(props) {
      super(props)
  
      if (props.user) {
        alert("You can't login if you are logged in!")
        props.history.push('/ticket-list')
      }
    }
  
    render() {
      return <SignIn />;
    }
  }
  
  export default withRouter(LoginContainer)
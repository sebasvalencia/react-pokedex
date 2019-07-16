import React from "react";

class Login extends React.Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();

  handleLogin = event => {
    event.preventDefault();
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;

    if (email.length > 0 && password.length > 0) {
      this.props.history.push({
        pathname: "app",
        state: { email: email, password: password }
      });
    } else {
      console.log("error");
    }
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.emailRef.current.value = "";
    this.passwordRef.current.value = "";
  };

  render() {
    return (
      <form className="container login">
        <input
          className="form-control"
          name="email"
          placeholder="Email"
          type="text"
          ref={this.emailRef}
        />
        <input
          className="form-control"
          name="password"
          placeholder="Password"
          type="text"
          ref={this.passwordRef}
        />
        <div className="center-block text-center">
          <button
            className="btn btn-outline-secondary"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
          <button
            className="btn btn-outline-primary"
            type="submit"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default Login;

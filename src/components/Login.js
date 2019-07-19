import React from "react";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    isHidden: true
  };

  emailRef = React.createRef();
  passwordRef = React.createRef();

  coachNameRef = React.createRef();
  coachEmailRef = React.createRef();
  coachPasswordRef = React.createRef();
  coachConfirmPasswordRef = React.createRef();

  handleChange = () => {
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
    this.setState({
      email,
      password
    });
  };

  handleLogin = event => {
    event.preventDefault();

    const emailValue = "s@s.com";
    const passwordValue = "sss";

    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;

    if (email.length > 0 && password.length > 0) {
      if (emailValue === email && passwordValue === password) {
        this.props.history.push({
          pathname: "app",
          state: { email: email }
        });
      }else{
        alert("Error in email or password, try again");
      }
    } else {
      alert("Error in the login, please try again");
    }
  };

  handleCancel = event => {
    event.preventDefault();
    this.emailRef.current.value = "";
    this.passwordRef.current.value = "";
  };

  toggleFormCreateCoach = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  handleCancelReturnLogin = event => {
    event.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  handleCreateCoach = event => {
    event.preventDefault();
    localStorage.setItem('nameCoach',this.coachNameRef.current.value);
    localStorage.setItem('emailCoach',this.coachEmailRef.current.value);

    this.props.history.push({
      pathname: "app",
      state: { email: this.coachEmailRef.current.value }
    });

    event.currentTarget.reset();
  };

  render() {
    if (this.state.isHidden) {
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
            onChange={this.handleChange}
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
              disabled={!this.state.email && !this.state.password}
            >
              Login
            </button>
          </div>
          <div className="center-block text-center">
            <button
              className="btn btn-light"
              onClick={this.toggleFormCreateCoach}
            >
              Create coach
            </button>
          </div>
        </form>
      );
    } else {
      return !this.state.isHidden && <this.FormCreateCoach />;
    }
  }

  FormCreateCoach = () => (
    <form className="container login" onSubmit={this.handleCreateCoach}>
      <input
        className="form-control"
        name="coachName"
        placeholder="Name"
        type="text"
        ref={this.coachNameRef}
      />

      <input
        className="form-control"
        name="coachEmail"
        placeholder="Email"
        type="text"
        ref={this.coachEmailRef}
      />

      <input
        className="form-control"
        name="coachPassword"
        placeholder="Password"
        type="password"
        ref={this.coachPasswordRef}
      />

      <input
        className="form-control"
        name="coachConfirmPassword"
        placeholder="Confirm Password"
        type="password"
        ref={this.coachConfirmPasswordRef}
      />

      <button
        className="btn btn-outline-secondary"
        onClick={this.handleCancelReturnLogin}
      >
        Cancel
      </button>
      <button
        className="btn btn-outline-primary"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}

export default Login;

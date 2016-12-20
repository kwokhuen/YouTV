class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: "",
      showModal: false
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close() {
  this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleLogin(e){
    e.preventDefault();
    this.setState({ showModal: false });
    const payload = {
      user: {
        email:     this.refs.eMail.value,
        password:  this.refs.password.value
      }
    }
    if (this.state.errors === "") {
      $.ajax({
        url: "/user/login",
        type: "post",
        data: payload
      })
      .done((response)=>{
        this.props.handleLogin(response)
      })
    }
  }


  render(){
    var Modal = ReactBootstrap.Modal;
    var Button = ReactBootstrap.Button;
    return(
      <div className="login">
      <h4 onClick={this.open}>Login</h4>
      <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Header closeButton>
      <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form className="login-form">
        <table>
          <tbody>
            <tr>
              <td><label>Email:</label></td>
              <td><input
              type="text"
              name="user[email]"
              placeholder="example@gmail.com"
              ref="eMail"
              /></td>
            </tr>
            <tr>
              <td><label>Password:</label></td>
              <td><input
              type="password"
              name="user[password]"
              placeholder="Password"
              ref="password"/></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">{this.state.errors}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
              <input type="submit" value="Login" onClick={this.handleLogin} />
      </form>
      </Modal.Body>
      </Modal>
      </div>
      );
  }

}

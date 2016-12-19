class Header extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hiddenLogin: true,
      hiddenRegister: true,
      message: "",
      loggedIn: false,
      eMail: "",
      user: {}
    }

    this.clickRegister = this.clickRegister.bind(this)
    this.clickLogin = this.clickLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  clickRegister(){
    this.setState({hiddenRegister: false})
    if (this.state.hiddenLogin === false) {
      $(".login-form").hide()
    }
  }

  clickLogin(){
    this.setState({hiddenLogin: false})
    if (this.state.hiddenRegister === false) {
      $(".register-form").hide()
    }
  }


  handleRegister(data){
    alert(data.message)
    this.clickLogin()
    $(".login-form").show()
    this.setState({eMail: data.user.email})
  }

  handleLogin(data){
      this.setState({user: data.user})
      console.log(this.state.user)
  }

  render(){
    return(
      <div>
        <ul>
          <li className="register-button" onClick={this.clickRegister}>
            <Register
              handleRegister={this.handleRegister} />
          </li>
          <li className="login-button" onClick={this.clickLogin}>
            <Login
              eMail={this.state.eMail}
              handleLogin={this.handleLogin}/>
          </li>
        </ul>
      </div>
      )
  }
}

class Header extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hiddenLogin: true,
      hiddenRegister: true,
      message: "",
      loggedIn: false,
      eMail: "",
      user: ""
    }

    this.clickRegister = this.clickRegister.bind(this)
    this.clickLogin = this.clickLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)

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
  }

  handleLogin(data){
    if (!data.name) {
      // this.setState({message: data.message})
      alert(data.message)
    }else {
      this.setState({user: data, loggedIn: true})

      }
  }

  handleLogout(response){
    if (!response.user) {
      this.setState({user: "", loggedIn: false })
      window.location.reload()
      console.log("You've been successfully logged out!")
    }
  }


  render(){
    if (!this.state.loggedIn) {
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
  } else {
    return(
      <div>
      <ul>
        <li>
          <h3>{this.state.user.name}</h3>
        </li>
        <li>
          <Logout
            handleLogout={this.handleLogout}/>
        </li>
        </ul>
      </div>
      )
  }
  }
}

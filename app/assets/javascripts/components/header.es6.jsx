class Header extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      message: ""
    }

    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)

  }

  handleRegister(data){
    alert(data.message)
    $(".login-form").show()
  }

  handleLogin(data){
    this.props.handleLogin(data)
  }

  handleLogout(response){
    if (!response.user) {
      this.setState({user: "", loggedIn: false })
      window.location.reload()
      console.log("You've been successfully logged out!")
    }
  }

  render(){
    var Navbar = ReactBootstrap.Navbar
    var Nav = ReactBootstrap.Nav
    var NavItem = ReactBootstrap.NavItem
    const logoStyle = {
      padding: "0",
      marginTop: "10px"
    }

    if (!this.props.loggedIn) {
    return(
      <div>
        <Navbar inverse>
          <Navbar.Header>
          <Navbar.Brand>
            <img src={'/logo.png'} style={logoStyle}/>
          </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
             <NavItem>
              <Register
                handleRegister={this.handleRegister}
                hiddenRegister={this.state.hiddenRegister}/>
            </NavItem>
            <NavItem>
              <Login
                handleLogin={this.handleLogin}/>
            </NavItem>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
      )
    } else {
    return(
        <div>
        <Navbar inverse>
          <Navbar.Header>
          <Navbar.Brand>
            <img src={'/logo.png'} style={logoStyle}/>
          </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
             <NavItem>
              <h4>{this.props.user.name}</h4>
            </NavItem>
            <NavItem>
              <Logout
             handleLogout={this.handleLogout}/>
            </NavItem>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
      )
  }
  }
}

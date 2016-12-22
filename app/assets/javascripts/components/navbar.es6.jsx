class NavigationBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      message: ""
    }

  this.handleLogin = this.handleLogin.bind(this)
  this.afterLogout = this.afterLogout.bind(this)

  }

  handleLogin(data){
    this.props.handleLogin(data)
  }

  afterLogout(response){
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

  if (!this.props.loggedIn) {
    return(
      <div>
        <nav>
          <div className="logo">
            <img src="logo4.png" />
          </div>
          <div>
              <ModalLogin
                afterLogin={this.props.afterLogin}
                handleLogin={this.handleLogin}/>
          </div>
        </nav>
      </div>
        )
  } else {
    return(
      <div>
        <nav>
          <div className="logged-in-nav">
            <h4 className="username">{this.props.user.name}</h4>
            <h4>|</h4>
            <Logout
              afterLogout={this.afterLogout}/>

          </div>
        </nav>
      </div>
        )
    }
  }
}

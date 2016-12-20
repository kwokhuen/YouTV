class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      loggedIn: false,
      user: ""
    }
    this.afterLogin = this.afterLogin.bind(this)
  }

  afterLogin(data){
    if (!data.name) {
      alert(data.message)
    } else {
      this.setState({user: data, loggedIn: true})
    }
  }

  render(){
    return (
      <div>
          <NavigationBar
          afterLogin={this.afterLogin}
          loggedIn={this.state.loggedIn}
          user={this.state.user}/>
          <Body
          afterLogin={this.afterLogin}
          loggedIn={this.state.loggedIn}
          user={this.state.user}/>
      </div>
      )
  }

}

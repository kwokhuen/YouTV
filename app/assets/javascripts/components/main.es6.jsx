class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state={}
    this.afterLogin = this.afterLogin.bind(this)
  }

  afterLogin(data){
    if (!data.name) {
      alert(data.message)
    }
  }

  render(){
    return (
      <div>
          <NavigationBar
          afterLogin={this.afterLogin}
          {...this.props}/>
          <Body
          afterLogin={this.afterLogin}
          {...this.props}/>
      </div>
      )
  }

}

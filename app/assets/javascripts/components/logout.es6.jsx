class Logout extends React.Component {

  constructor(props){
    super(props);

    this.state={}
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(){
    $.ajax({
      method: "get",
      url: "/user/logout"
    })
    .done((response)=>{
      this.props.handleLogout(response)
    })
  }

  render(){
    return(
      <div className="logout">
        <h3 onClick={this.handleLogout}>Logout</h3>
      </div>
    )
  }

}
 // onClick={this.handleLogout}
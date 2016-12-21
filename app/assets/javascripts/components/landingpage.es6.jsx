class LandingPage extends React.Component {

  constructor(props) {
    super(props)

    this.state={}

    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister(data){
    if(data.userId){
    alert(data.message)
    $(".login-button").click()}
    else {
      alert(data.errors.join("\n"))
    }
  }

  render(){
    return(
      <div className="wrapper">
        <div>
          <h1 className="slogan">Click, play, enjoy.</h1>
          <p className="long-slogan">DON'T WASTE YOUR TIME PICKING VIDEO. LET US DO THE REST.</p>
        </div>
        <div>
          <ModalRegister className="landingpage-modal"
            handleRegister={this.handleRegister}/>
        </div>
      </div>
    );
  }

}

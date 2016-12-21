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
      <div className="outer-wrapper">

        <div className="wrapper">
          <div>
            <h1 className="slogan">Click, play, enjoy.</h1>
            <p className="long-slogan">DON'T WASTE YOUR TIME PICKING VIDEOS. LET US DO THE REST.</p>
          </div>
          <div>
            <ModalRegister className="landingpage-modal"
              handleRegister={this.handleRegister}/>
            </div>
          </div>

          <div className="about-us">
            <img src="about-us.png" />
            <p className="about-us-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
    );
  }

}

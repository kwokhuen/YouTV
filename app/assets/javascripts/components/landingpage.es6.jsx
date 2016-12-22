class LandingPage extends React.Component {

  constructor(props) {
    super(props)

    this.state={}

    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister(data){
    if(data.user){
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
            <p className="about-us-text">When was the last time you came home and weren’t overloaded with information?  From the kids to the pets to the web.  <br/><br/>Here at UTV we want to take you back to a time when things were much easier.  But continue to give you new and up to date content from the world's leader in content delivery Youtube. We do this by taking the grief out of looking online, searching through databases and wondering what do i watch next.  All of content are prescreened to be enjoyable and to match the categories you choose.  <br/><br/>If you still don't like what you see simply thumbs down, the video you’re watching and skip to another.  Our algorithm is made to understand and evaluate your viewing needs and cater our content to meet that need.  <br/><br/>We hope you enjoy your watching experience with us!</p>
          </div>
      </div>
    );
  }

}

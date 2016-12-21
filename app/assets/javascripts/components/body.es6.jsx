class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state={}
    this.handleCategory = this.handleCategory.bind(this)
  }

  handleCategory(response) {
    console.log(response)
  }

  render(){
    if (this.props.loggedIn) {
    return(
      <div>
        <h1>Categories</h1>
        <SimpleSlider
        handleCategory={this.handleCategory}/>
      </div>)
    } else {
      return(

        <div className="landingpage">
        <LandingPage />
        <VideoOverlay />
        </div>)

    }
  }
}


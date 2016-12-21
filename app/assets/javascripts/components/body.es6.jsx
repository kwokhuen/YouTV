class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state={videoUrl: ""}
    this.handleCategory = this.handleCategory.bind(this)
  }

  handleCategory(response) {
    this.setState({videoUrl: response.video})
  }

  render(){
    if (this.props.loggedIn) {
    return(
      <div>
        <h1 className="header-category">Categories</h1>
        <SimpleSlider
          handleCategory={this.handleCategory}/>
        <VideoOverlay
          videoUrl={this.state.videoUrl}/>
      </div>)
    } else {
      return(
        <div className="landingpage">
        <LandingPage />
        </div>)

    }
  }
}

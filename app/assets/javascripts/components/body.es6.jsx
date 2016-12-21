class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      videoUrl: "",
      subCategoryId: "",
      categoryId: ""}
    this.handleCategory = this.handleCategory.bind(this)
  }

  handleCategory(response) {
    this.setState({videoUrl: response.youtube_id, subCategoryId: response.sub_category_id, categoryId: response.category_id})
  }

  render(){
    if (this.props.loggedIn) {
    return(
      <div>
        <h1 className="header-category">Categories</h1>
        <SimpleSlider
          handleCategory={this.handleCategory}/>
        <VideoOverlay
          subCategoryId={this.state.subCategoryId}
          videoUrl={this.state.videoUrl}
          categoryId={this.state.categoryId}
          handleCategory={this.handleCategory}/>
      </div>)
    } else {
      return(
        <div className="landingpage">
        <LandingPage />
        </div>)

    }
  }
}

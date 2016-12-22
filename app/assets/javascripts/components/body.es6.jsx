class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      videoUrl: "",
      subCategoryId: "",
      categoryId: ""}

    this.handleCategory = this.handleCategory.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    const data = {
      category:{category_id: $(event.target).attr("id")}
    }
    $.ajax({
      method: "get",
      url: "/video/category",
      data: data
    }).done((response)=>{
       this.handleCategory(response)
       $(".mm-launch").click()
    })
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
          handleClick={this.handleClick}/>
        <VideoOverlay
          subCategoryId={this.state.subCategoryId}
          videoUrl={this.state.videoUrl}
          categoryId={this.state.categoryId}
          handleCategory={this.handleCategory}/>
        <Footer />
      </div>)
    } else {
      return(
        <div className="landingpage">
        <LandingPage />
        <Footer />
        </div>)

    }
  }
}

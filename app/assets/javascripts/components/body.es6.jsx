class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      videoUrl: "",
      subCategoryId: "",
      category: ""}

    this.handleCategory = this.handleCategory.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleYoutvClick = this.handleYoutvClick.bind(this)
    this.handleFavoritesClick = this.handleFavoritesClick.bind(this)
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

  handleYoutvClick(){
    $.ajax({
      method: "get",
      url: "/video/you_tv"
    }).done((response) => {
      this.handleCategory(response)
      $(".mm-launch").click()
    })
  }

  handleFavoritesClick(){
    $.ajax({
      method: "get",
      url: "/video/your_favorites"
    }).done((response) => {
      this.handleCategory(response)
      $(".mm-launch").click()
    })
  }

  handleCategory(response) {
    this.setState({videoUrl: response.youtube_id, subCategoryId: response.sub_category_id, category: response.category, isYoutv: response.isYoutv, isFavorite: response.isFavorite})
  }

  render(){
    if (this.props.loggedIn) {
    return(
      <div>
        <h1 className="header-category">Categories</h1>
        <SimpleSlider
          handleClick={this.handleClick}
          handleYoutvClick={this.handleYoutvClick}
          handleFavoritesClick={this.handleFavoritesClick}/>
        <VideoOverlay
          subCategoryId={this.state.subCategoryId}
          videoUrl={this.state.videoUrl}
          categoryId={this.state.categoryId}
          handleCategory={this.handleCategory}
          category={this.state.category}
          isFavorite={this.state.isFavorite}
          isYoutv={this.state.isYoutv}
          handleCategory={this.handleCategory}
          handleYoutvClick={this.handleYoutvClick}
          handleFavoritesClick={this.handleFavoritesClick}/>
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

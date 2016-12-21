class SimpleSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state={}

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
       this.props.handleCategory(response)
       $(".mm-launch").click()
    })
  }

  render() {
    const slickerStyle = {
      width: "20em"
    };

    // Variable Width
    var settings = {
      slidesToShow: 3,
      centerMode: true
    };

    return (
      <Slider {...settings}>
        <div><img onClick={this.handleClick} className="category" id="1" style={slickerStyle} src="comedy_channel.jpg"/><h4 className="category_title">Comedy Network</h4></div>
        <div><img onClick={this.handleClick} className="category" id="2" style={slickerStyle} src="education_channel.jpg"/><h4 className="category_title">Educational & informative</h4></div>
        <div><img onClick={this.handleClick} className="category" id="3" style={slickerStyle} src="kids_channel.jpg"/><h4 className="category_title">Kids Discovery</h4></div>
        <div><img onClick={this.handleClick} className="category" id="4" style={slickerStyle} src="cooking_channel.jpg"/><h4 className="category_title">Cook & Bake</h4></div>
        <div><img onClick={this.handleClick} className="category" id="5" style={slickerStyle} src="enterainment_channel.jpg"/><h4 className="category_title">Enterainment</h4></div>
        <div><img onClick={this.handleClick} className="category" id="6" style={slickerStyle} src="gaming_channel.jpg"/><h4 className="category_title">Gamer Channel</h4></div>
      </Slider>
    );
  }
};

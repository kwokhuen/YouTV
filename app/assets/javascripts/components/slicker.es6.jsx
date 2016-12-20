class SimpleSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state={}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    const data = {
      category:{category_id: $(event.target).attr("id") }
    }
    $.ajax({
      method: "get",
      url: "/video/category",
      data: data
    }).done((response)=>{
      this.props.handleCategory(response)
    })
  }

  render() {
    const slickerStyle = {
      width: "20em"
    };

    // Variable Width
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    };

    return (
      <Slider {...settings}>
        <div><img onClick={this.handleClick} className="category" id="1" style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img onClick={this.handleClick} className="category" id="2" style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img onClick={this.handleClick} className="category" id="3" style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img onClick={this.handleClick} className="category" id="4" style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img onClick={this.handleClick} className="category" id="5" style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img onClick={this.handleClick} className="category" id="6" style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
      </Slider>
    );
  }
};

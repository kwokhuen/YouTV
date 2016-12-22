class SimpleSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state={}

  }


  render() {
    const slickerStyle = {
      width: "20em"
    };

    // Variable Width
    var settings = {
      infinite: true,
      slidesToShow: 3,


      variableWidth: true
    };

    return (
      <Slider {...settings}>
        <div><img onClick={this.props.handleClick} id="1" style={slickerStyle} src="comedy.png"/><h4 className="category_title">Comedy Network</h4></div>
        <div><img onClick={this.props.handleClick} id="2" style={slickerStyle} src="education.png"/><h4 className="category_title">Educational & Informative</h4></div>
        <div><img onClick={this.props.handleClick} id="3" style={slickerStyle} src="kids.png"/><h4 className="category_title">Kids Discovery</h4></div>
        <div><img onClick={this.props.handleClick} id="4" style={slickerStyle} src="cook.png"/><h4 className="category_title">Cooking</h4></div>
        <div><img onClick={this.props.handleClick} id="5" style={slickerStyle} src="entertain.png"/><h4 className="category_title">Enterainment</h4></div>
        <div><img onClick={this.props.handleClick} id="6" style={slickerStyle} src="game.png"/><h4 className="category_title">Gamer</h4></div>
      </Slider>
    );
  }
};

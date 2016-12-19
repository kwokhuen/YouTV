var SimpleSlider = React.createClass({
  render: function () {
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
        <div><img style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
        <div><img style={slickerStyle} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Comedy_Central_UK.svg/861px-Comedy_Central_UK.svg.png"/></div>
      </Slider>
    );
  }
});

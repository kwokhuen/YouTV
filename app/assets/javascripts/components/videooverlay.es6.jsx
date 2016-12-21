class VideoOverlay extends React.Component {

  constructor(props){
    super(props)
    this.state={}

    this.deployVideo = this.deployVideo.bind(this)
    this.destroyVideo = this.destroyVideo.bind(this)

  }

  deployVideo() {
    this.setState({videoUrl: this.props.videoUrl + "?autoplay=1"})
    jQuery('.mm-product-video-modal-container').addClass('open');
    setTimeout(function() {
      jQuery('.mm-product-video-modal').addClass('open');

    }, 250);
  }

  destroyVideo() {
    this.setState({videoUrl: this.props.videoUrl.slice(0, -11)})
    jQuery('.mm-product-video-modal').removeClass('open');
    setTimeout(function() {
      jQuery('.mm-product-video-modal-container').removeClass('open');
    }, 250);
  }

  render(){
    const buttonStyle = {
      marginTop: "25%",
      display: "none"
    }
    return(
      <div>
        <div style={{align: "center"}} className="mm-product-video-modal-container">
          <div className="dummy-flexbox-item"></div>
          <div className="video-controls">
          <div className="fakearrow"></div>

            <div className="mm-product-video-modal dropper">
              <div className="embed-responsive embed-responsive-16by9">
                <div id="video-placeholder">
                  <iframe width="480" height="270" src={'//www.youtube.com/embed/' + this.state.videoUrl} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <i className="fa fa-chevron-circle-right fa-4x" aria-hidden="true"></i>
          </div>
              <div className="mm-video-overlay" onClick={this.destroyVideo}></div>
              <div className="pref-bar">
                <i className="fa fa-thumbs-o-down fa-5x" aria-hidden="true"></i>
                <i className="fa fa-heart-o fa-5x" aria-hidden="true"></i>
                <i className="fa fa-thumbs-o-up fa-5x" aria-hidden="true"></i>
              </div>
            </div>
            <div className="mm-launch-container container">
            <div className="col-sm-offset-3 col-sm-6">
          <button onClick={this.deployVideo} className="mm-launch" style={buttonStyle}>Video!</button>
            </div>
            </div>
      </div>
      )
  }
}

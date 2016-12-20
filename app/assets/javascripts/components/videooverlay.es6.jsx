class VideoOverlay extends React.Component {

  constructor(props){
    super(props)
    this.state={
      videoUrl: "f_DFLPwVF48"
    }

    this.deployVideo = this.deployVideo.bind(this)
    this.destroyVideo = this.destroyVideo.bind(this)

  }

  deployVideo() {
    this.setState({videoUrl: this.state.videoUrl + "?autoplay=1"})
    jQuery('.mm-product-video-modal-container').addClass('open');
    setTimeout(function() {
      jQuery('.mm-product-video-modal').addClass('open');

    }, 250);
  }

  destroyVideo() {
    this.setState({videoUrl: this.state.videoUrl.slice(0, -11)})
    jQuery('.mm-product-video-modal').removeClass('open');
    setTimeout(function() {
      jQuery('.mm-product-video-modal-container').removeClass('open');
    }, 250);
  }

  render(){
    const buttonStyle = {
      marginTop: "25%"
    }
    return(
      <div>
        <div style={{align: "center"}} className="mm-product-video-modal-container">
          <div className="mm-product-video-modal dropper">
            <div className="embed-responsive embed-responsive-16by9">
              <div id="video-placeholder">
              <iframe width="480" height="270" src={'//www.youtube.com/embed/' + this.state.videoUrl} frameBorder="0" allowFullScreen></iframe>
              </div>
        </div>
          </div>
              <div className="mm-video-overlay" onClick={this.destroyVideo}></div>
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

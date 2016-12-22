class Footer extends React.Component {
  render() {
    return (
      <div className="footer container">
        <footer>
          <div className="row center">
            <div className="col span-1-of-1">
              <ul className="footer-nav">
                <li><a href="https://github.com/onachassi">Ori <i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/CHQNguyen">Chinh <i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/kwokhuen">Benjamin <i className="fa fa-github" aria-hidden="true"></i></a></li>
              </ul>
            </div>

          </div>

          <div className="row">
            <p>
              <small>Copyright &copy; 2016 by YouTV. Powered by YouTube.</small>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

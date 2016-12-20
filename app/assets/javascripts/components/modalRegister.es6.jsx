class ModalRegister extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
  this.close = this.close.bind(this)
  this.open = this.open.bind(this)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render () {
    var Modal = ReactBootstrap.Modal;
    var Button = ReactBootstrap.Button;
    return (
      <div>
      <Button onClick={this.open} bsStyle="danger">Register</Button>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm
          closeModal={this.close}
          handleRegister={this.props.handleRegister}/>
        </Modal.Body>
      </Modal>
      </div>
    );
  }
}

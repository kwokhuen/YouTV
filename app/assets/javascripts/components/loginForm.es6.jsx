class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: "",
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e){
    e.preventDefault();
    const payload = {
      user: {
        email:     $("#formHorizontalEmail").val(),
        password:  $("#formHorizontalPassword").val()
      }
    }
    console.log(payload);
    if (this.state.errors === "") {
      $.ajax({
        url: "/user/login",
        type: "post",
        data: payload
      })
      .done((response)=>{
        console.log(response)
        this.props.afterLogin(response)
      })
    }
  }



  render() {
    var Form = ReactBootstrap.Form;
    var FormGroup = ReactBootstrap.FormGroup;
    var FormControl = ReactBootstrap.FormControl;
    var Col = ReactBootstrap.Col;
    var ControlLabel = ReactBootstrap.ControlLabel;
    var Button = ReactBootstrap.Button;
    const verifyError = {
      color: "red"
    }
    return (
      <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.handleLogin} bsStyle="primary" type="submit">
                Login
              </Button>
            </Col>
          </FormGroup>
        </Form>
    );
  }
}

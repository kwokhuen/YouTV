class RegisterForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      errors: "",
    }
    this.verifyChange = this.verifyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  verifyChange(){
    var password = $("#formHorizontalPassword").val();
    var vPassword = $("#formHorizontalVerifyPassword").val();
    if (vPassword === "") {
      this.setState({errors: ""})
    } else if (password != vPassword) {
      this.setState({errors: "- Password does not match."})
    } else {
      this.setState({errors: ""})
    }
  }

  handleSubmit(e){
    this.props.closeModal();
    e.preventDefault();
      const data = {
      user: {
        full_name: $("#formHorizontalFullName").val(),
        email:     $("#formHorizontalEmail").val(),
        password:  $("#formHorizontalVerifyPassword").val()
      }
    }
    if (this.state.errors === "") {
      $.ajax({
        url: "/user/register",
        type: "post",
        data: data
      })
      .done((response)=>{
        this.props.handleRegister(response);
        $(".form-horizontal").each(function(){
          this.reset();
        });
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
          <FormGroup controlId="formHorizontalFullName">
            <Col componentClass={ControlLabel} sm={2}>
              Full Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Full Name" />
            </Col>
          </FormGroup>

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

          <FormGroup controlId="formHorizontalVerifyPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Verify Password
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.verifyChange} type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <h5 style={verifyError}>{this.state.errors}</h5>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.handleSubmit} bsStyle="primary" type="submit">
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>
    );
  }
}

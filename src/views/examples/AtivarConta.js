import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Button
} from "reactstrap";

import Axios from "config/axios";
// core components
import ExamplesNavbar from "components/Navbars/MainNav";
import TransparentFooter from "components/Footers/TransparentFooter.js";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }
  async verificar() {
    // eslint-disable-next-line react/prop-types
    const { token } = this.props.match.params;
    Axios.post("/api/validarEmail", { token })
      .then(() => {
        window.alert("Ativado com sucesso");
        return (window.location.href = "/login");
      })
      .catch(error => {
        window.alert("Erro ao ativar: " + error.response.data.error);
        return this.setState({
          error: true
        });
      });
  }
  async reenviar() {
    let { email } = this.state;
    Axios.post("/api/reenviarEmail", { email })
      .then(() => {
        window.alert("Reenviado com sucesso, por favor verifique o seu email");
        return (window.location.href = "/");
      })
      .catch(error => {
        window.alert("Erro ao ativar: " + error.response.data.error);
        return this.setState({
          error: true
        });
      });
  }
  async componentDidMount() {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    await this.verificar();
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }

  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
            }}
          ></div>
          <div className="content">
            <Container>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="logo-container" style={{ width: "40%" }}>
                        <img
                          alt="Logo hive"
                          src={require("assets/img/hive.png")}
                        ></img>
                      </div>
                    </CardHeader>
                    <CardBody>
                      {this.state.error ? (
                        <>
                          <p>Reenviar email:</p>
                          <InputGroup className={"no-border input-lg"}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_email-85"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onChange={event =>
                                this.setState({ email: event.target.value })
                              }
                            ></Input>
                          </InputGroup>
                          <Button
                            block
                            className="btn-round"
                            color="info"
                            onClick={() => this.reenviar()}
                            size="lg"
                          >
                            Reenviar
                          </Button>
                        </>
                      ) : (
                        <p>Ativado com sucesso</p>
                      )}
                    </CardBody>
                    <CardFooter className="text-center">
                      <div className="pull-left">
                        <h6>
                          <a className="link" href="/cadastrar">
                            Criar conta
                          </a>
                        </h6>
                      </div>
                      <div className="pull-right">
                        <h6>
                          <a
                            className="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Esqueci minha senha.
                          </a>
                        </h6>
                      </div>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
          <TransparentFooter />
        </div>
      </>
    );
  }
}

export default LoginPage;

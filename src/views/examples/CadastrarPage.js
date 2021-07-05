import React, { useState } from "react";

// reactstrap components
import {
  Button,
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
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/MainNav";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import Axios from "config/axios";

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [documento, setDocumento] = useState("");
  const [endereco, setEndereco] = useState("");

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  async function registrar() {
    if (!email || !senha || !endereco || !documento || !nome) {
      return window.alert("Por favor preencha todos os campos");
    }
    Axios.post("/api/cadastrar", {
      email,
      senha,
      endereco,
      documento,
      nome
    })
      .then(() => {
        window.alert("Cadastrado com sucesso, por favor verifique o seu email");
        return (window.location.href = "/login");
      })
      .catch(error => {
        return window.alert(
          "Erro ao cadastra usuario: " + error.response.data.error
        );
      });
  }

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
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nome completo"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={event => setNome(event.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_badge"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Cpf"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={event => setDocumento(event.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons files_single-copy-04"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Endereço"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={event => setEndereco(event.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={event => setEmail(event.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Senha"
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={event => setSenha(event.target.value)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={() => registrar()}
                      size="lg"
                    >
                      Criar conta
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a className="link" href="/login">
                          Entrar
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

export default LoginPage;

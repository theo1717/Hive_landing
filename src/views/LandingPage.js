import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import MainNav from "components/Navbars/MainNav";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <MainNav />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Quem somos?</h2>
                <h5 className="description">
                  O hive é a maneira mais inovadora e segura de comunicar
                  cidades aos seus cidadãos.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/iot.webp") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Só depois que a tecnologia inventou o telefone, o
                      telégrafo, a televisão, a internet, foi que se descobriu
                      que o problema de comunicação mais sério era o de perto"
                      <br></br>
                      <br></br>
                      <small>-Millôr Fernandes</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/iot2.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/modernIot.png") + ")"
                    }}
                  ></div>
                  <h3>Monitoramento em tempo real para cidades</h3>
                  <p>
                    O Hive promove a integração das plataformas de IoT em uma
                    cidade, com hardware de alta confiabilidade para
                    garantir o mínimo de downtime possível.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;

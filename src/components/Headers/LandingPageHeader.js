import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/mainBg.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Nós somos o Hive</h1>
            <a
              href="https://s3.us-east-2.amazonaws.com/hive.files/apks/hive-v1.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{
                  backgroundColor: "#FCD91F",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Baixar app android
              </Button>
            </a>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;

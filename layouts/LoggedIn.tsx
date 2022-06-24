import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import QuickLinks from "../components/QuickLinks";
import Section from "../components/Section";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  padding: 5px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const Text = styled.div`
  height: 50px;
  margin: 4px;
`;

const Links = styled.div`
  display: flex;
`;
const Middle = styled.div`
  overflow-y: auto;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: whitesmoke;
`;

function LoggedIn({ header, children }: { header: string; children: any }) {
  return (
    <Container>
      <Section />

      <Middle>
        <Header>{header}</Header>
        {children}
        <Footer />
      </Middle>

      <QuickLinks />
    </Container>
  );
}

export default LoggedIn;

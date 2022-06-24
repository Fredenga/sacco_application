import { useViewportSize } from "@mantine/hooks";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Navbar = styled.div`
  width: 100vw;
  height: 150px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  height: 50px;
  margin: 4px;
`;

const Links = styled.div`
  display: flex;
`;

function LoggedOut({ children }: { children: any }) {
  return (
    <Container>
      <Navbar>
        <Text>Esacco</Text>
        <Links>
          <Text>home</Text>
          <Text>products</Text>
          <Text>about</Text>
        </Links>
        <Links>
          <Text>login</Text>
          <Text>register</Text>
        </Links>
      </Navbar>
      {children}
      <Footer />
    </Container>
  );
}

export default LoggedOut;

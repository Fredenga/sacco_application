import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Link from "next/link";

const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Navbar = styled.div`
  box-shadow: 0px 0px 5px 2px lightgray;
  width: 100%;
  height: 80px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 20px;
  margin: 4px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
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
          <Link href="/">
            <Text>home</Text>
          </Link>
          <Link href="/product">
            <Text>products</Text>
          </Link>
        </Links>
        <Links>
          <Link href="/login">
            <Text>login</Text>
          </Link>
          <Link href="/register">
            <Text>register</Text>
          </Link>
        </Links>
      </Navbar>
      {children}
      <Footer />
    </Container>
  );
}

export default LoggedOut;

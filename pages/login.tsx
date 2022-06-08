import { TextInput, Title, Button, Text } from "@mantine/core";
import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;
const LeftContainer = styled.div`
  flex: 1;
`;
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Login = () => {
  return (
    <AppContainer>
      <LeftContainer>
        <Image
          src="https://images.pexels.com/photos/5849556/pexels-photo-5849556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="appimage"
        />
        {/* hello world */}
      </LeftContainer>
      <RightContainer>
        <Title>Welcome to Essaco, please Login</Title>
        <TextInput size="lg" label="Email" radius="lg" />
        <TextInput size="lg" label="Password" radius="lg" />
        <Button mt={16} color="teal" px={80} radius="xs" size="lg">
          Login
        </Button>
        <Text mt={5} variant="link">
          Forgot your password?
        </Text>
      </RightContainer>
    </AppContainer>
  );
};

export default Login;

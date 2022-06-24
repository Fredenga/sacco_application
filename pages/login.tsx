import { TextInput, Title, Button, Text } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Outcome } from "../components/Notifications";
import userService from "../src/graphql/services/userService";
import { loginUser } from "../state/userState";

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
  height: 100vh;
  width: 50vw;

  object-fit: cover;
`;

const Login = () => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const dispatch = useDispatch();

  const [loading, SetLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async () => {
    SetLoading(true);
    try {
      const { login } = await userService.login({ email, password });
      login && localStorage.setItem("token", login.accessToken);

      dispatch(loginUser(login));
      Outcome(
        "Login Successfull",
        `Welcome back, ${login.user.firstName}!`,
        "green"
      );
      router.replace("/dashboard");
    } catch (error) {
      Outcome("Login Not Successfull", "Please try again", "red");
    }
    SetLoading(false);
  };
  return (
    <AppContainer>
      <LeftContainer>
        <Image
          src="https://images.unsplash.com/photo-1537849244241-351b40016963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9uZXl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="appimage"
        />
      </LeftContainer>
      <RightContainer>
        <Title my={20}>Welcome to Esacco, please Login</Title>
        <TextInput
          my={10}
          label="Email"
          size="lg"
          radius="md"
          placeholder="Enter your email address"
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <TextInput
          size="lg"
          label="Password"
          radius="md"
          placeholder="Enter your password"
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <Button
          mt={16}
          px={80}
          radius="md"
          size="lg"
          color="green"
          loading={loading}
          onClick={handleSubmit}
        >
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

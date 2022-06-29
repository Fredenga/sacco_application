import { TextInput, Title, Button, Text, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { Outcome } from "../components/Notifications";
import userService from "../src/graphql/services/userService";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;
const LeftContainer = styled.div`
  flex: 1;
  height: 100vh;
`;
const RightContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Image = styled.img`
  height: 100vh;
  width: 50vw;

  object-fit: cover;
`;

const Register = () => {
  const [loading, SetLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async (values: typeof form.values) => {
    const { confirmPassword, ...variable } = values;
    SetLoading(true);
    try {
      const { createUser } = await userService.createUser(variable);
      console.log(createUser);
      if (createUser.errors !== null) {
        Outcome(
          "Registration Not Successfull",
          createUser.errors.message,
          "red"
        );
      } else {
        Outcome(
          "Registration Successfull",
          `Hi ${createUser.user.firstName}, welcome aboard!`,
          "green"
        );
        router.replace("/login");
      }
    } catch (error) {
      console.log(error);
      Outcome("Registration Not Successfull", "check your credentials", "red");
    }
    SetLoading(false);
  };

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
      phoneNumber: "+254",
      lastName: "",
      firstName: "",
      email: "",
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  return (
    <AppContainer>
      <LeftContainer>
        <Image
          src="https://images.unsplash.com/photo-1599461149326-2e9dd1113a02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vbmV5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="appimage"
        />
      </LeftContainer>
      <RightContainer>
        <Title my={20}>Welcome to Esacco, fill in your details</Title>
        <form onSubmit={form.onSubmit(handleRegister)}>
          <TextInput
            my={10}
            label="Firstname"
            size="lg"
            radius="md"
            placeholder="Enter your Firstname"
            required
            {...form.getInputProps("firstName")}
          />
          <TextInput
            my={10}
            label="Lastname"
            size="lg"
            radius="md"
            placeholder="Enter your lastname"
            required
            {...form.getInputProps("lastName")}
          />
          <TextInput
            my={10}
            label="Email"
            size="lg"
            radius="md"
            placeholder="Enter your email address"
            type="email"
            required
            {...form.getInputProps("email")}
          />
          <TextInput
            my={10}
            label="phoneNumber"
            size="lg"
            radius="md"
            placeholder="Enter your phoneNumber"
            type="tel"
            required
            {...form.getInputProps("phoneNumber")}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            mt="sm"
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />
          <Button
            mt={16}
            px={80}
            radius="md"
            size="lg"
            color="green"
            loading={loading}
            type="submit"
            fullWidth
          >
            Register
          </Button>

          <Text mt={5} variant="link">
            Have an account? <Link href="/login">Login</Link>
          </Text>
        </form>
      </RightContainer>
    </AppContainer>
  );
};

export default Register;

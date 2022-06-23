import { Button, Center, Stack, TextInput } from "@mantine/core";
import React, { useState } from "react";
import userService from "../src/graphql/services/userService";

const Hello = () => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const handleSubmit = async () => {
    try {
      const data = await userService.login({ email, password });
      console.log(data || "failed");
    } catch (error) {
      console.log({
        message: "failed",
        error,
      });
    }
  };
  return (
    <Stack>
      <TextInput
        label="Email"
        placeholder="Enter your email address"
        onChange={(e) => setemail(e.target.value)}
        required
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        onChange={(e) => setpassword(e.target.value)}
        required
      />
      <Button onClick={handleSubmit} variant="light" color="green">
        Login
      </Button>
    </Stack>
  );
};

export default Hello;

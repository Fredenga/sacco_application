import React from "react";
import styled from "styled-components";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Anchor, Text } from "@mantine/core";

const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const AppHeader = () => {
  return (
    <AppContainer>
      <LeftContainer>
        <ChatBubbleIcon color="purple" />
        <Text size="lg" variant="gradient" ml={3}>
          ChatIcon
        </Text>
      </LeftContainer>
      <MiddleContainer>
        <Anchor mr={10}>Home</Anchor>
        <Anchor>Chat</Anchor>
        <Anchor>Contacts</Anchor>
        <Anchor>Settings</Anchor>
        <Anchor>FAQs</Anchor>
        <Anchor>TERMS OF USE</Anchor>
      </MiddleContainer>
      <RightContainer></RightContainer>
    </AppContainer>
  );
};

export default AppHeader;

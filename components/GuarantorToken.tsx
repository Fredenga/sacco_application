import React from "react";
import { useState } from "react";
import { Dialog, Group, Button, TextInput, Text } from "@mantine/core";
interface TokenProps {
  token: String;
}

const GuarantorToken: React.FC<TokenProps> = ({ token }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Group position="center">
        <Button onClick={() => setOpened((o) => !o)}>Reveal Token</Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Copy Your Guarantor Token
        </Text>

        <Group align="flex-start">
          <Text>{token}</Text>
        </Group>
      </Dialog>
    </div>
  );
};

export default GuarantorToken;

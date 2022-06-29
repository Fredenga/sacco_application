import React from "react";
import { useState } from "react";
import { Dialog, Group, Button, TextInput, Text } from "@mantine/core";

const GuarantorToken = () => {
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

        <Group align="flex-end">
          <TextInput placeholder="token" style={{ flex: 1 }} />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
    </div>
  );
};

export default GuarantorToken;

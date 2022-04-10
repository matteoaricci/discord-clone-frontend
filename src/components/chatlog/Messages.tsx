import React from "react";
import { Box, Group, ScrollArea } from "@mantine/core";

type Props = {
  messages: Message[];
};

interface Message {
  content: string;
}

export default function ChatHub({ messages = [] }: Props) {
  return (
    <ScrollArea style={{height: 'calc(100vh - 100px)', width: '100%'}}>
      <Group
        direction="column"
      >
        {messages.map((message, index) => {
          return (
            <Group key={index}>
              <Box
                sx={(theme) => ({
                  paddingLeft: "2rem",
                })}
              >
                {message.content}
              </Box>
            </Group>
          );
        })}
      </Group>
    </ScrollArea>
  );
}

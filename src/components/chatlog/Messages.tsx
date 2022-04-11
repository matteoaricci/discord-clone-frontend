import React from "react";
import { Box, Group, ScrollArea, createStyles } from "@mantine/core";

type Props = {
  messages: Message[];
};

export interface Message {
  content: string;
}

export default function ChatHub({ messages = [] }: Props) {
  const { classes } = useStyles();
  return (
    <ScrollArea className={classes.scroll}>
      <Group direction="column">
        {messages.map((message, index) => {
          return (
            <Group key={index}>
              <Box className={classes.messageBox}>{message.content}</Box>
            </Group>
          );
        })}
      </Group>
    </ScrollArea>
  );
}

const useStyles = createStyles({
  scroll: { height: "calc(100vh - 100px)", width: "100%" },
  messageBox: { paddingLeft: "2rem" },
});

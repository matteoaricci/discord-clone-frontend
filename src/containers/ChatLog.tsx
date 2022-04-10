import React, { useState } from "react";
import Messages from "../components/chatlog/Messages";
import NewMessageForm from "../components/chatlog/NewMessageForm";
import { Group, Box, createStyles } from "@mantine/core";
import { useForm } from "@mantine/hooks";

type Props = {};
interface Message {
  content: string;
}

export default function ChatLog({}: Props) {
  const [messages, setMessages] = useState<Message[]>(dummyArray);
  const { classes } = useStyles();

  const newMessageForm = useForm({
    initialValues: {
      newMessage: "",
    },
  });

  const handleSubmitMessage = (newMessage: string) => {
    setMessages([...messages, { content: newMessage }]);
    newMessageForm.setFieldValue("newMessage", "");
  };

  return (
    <Box className={classes.boxContainer}>
      <Group direction="column">
        <Messages messages={messages} />
        <NewMessageForm
          messageFormData={newMessageForm}
          handleSubmitMessage={handleSubmitMessage}
        />
      </Group>
    </Box>
  );
}

const dummyArray: Message[] = [...Array(30)].map(() => {
  const randomStr = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
  return { content: randomStr.slice(0, Math.random() * 26 + 2) };
});

const useStyles = createStyles({
  boxContainer: {
    width: "100%",
    position: "relative",
    height: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
  },
});

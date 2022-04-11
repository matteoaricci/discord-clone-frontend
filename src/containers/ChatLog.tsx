import React, { useState, useEffect } from "react";
import Messages from "../components/chatlog/Messages";
import NewMessageForm from "../components/chatlog/NewMessageForm";
import { Group, Box, createStyles } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/reducers";

type Props = {};
interface Message {
  content: string;
}

export default function ChatLog({}: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  const { classes } = useStyles();

  const newMessageForm = useForm({
    initialValues: {
      newMessage: "",
    },
  });

  useEffect(() => {
    dispatch({ type: "chat/initialize", payload: dummyArray });
  }, []);

  useEffect(() => {
    setMessages(chat);
  }, [chat]);

  const handleSubmitMessage = (newMessage: string) => {
    // setMessages([...messages, { content: newMessage }]);
    dispatch({ type: "chat/add", payload: { content: newMessage } });
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

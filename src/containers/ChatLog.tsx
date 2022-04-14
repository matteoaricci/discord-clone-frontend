import React, { useEffect } from "react";
import Messages from "../components/chatlog/Messages";
import NewMessageForm from "../components/chatlog/NewMessageForm";
import { Group, Box, createStyles } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/reducers";
import * as actions from "../state/actions/chatActions";
import * as channelActions from "../state/actions/channelActions";

type Props = {};
interface Message {
  content: string;
}

export default function ChatLog({}: Props) {
  const channelId = useSelector(
    (state: RootState) => state.channel.currentChannel
  );
  const chat: Message[] =
    useSelector(
      (state: RootState) =>
        state.channel.channels.find((channel) => channel.id === channelId)
          ?.messages
    ) || [];
  const dispatch = useDispatch();

  const { classes } = useStyles();

  const newMessageForm = useForm({
    initialValues: {
      newMessage: "",
    },
  });

  const handleSubmitMessage = (newMessage: string) => {
    dispatch({
      type: channelActions.addMessage.type,
      payload: { message: { content: newMessage }, channelId: channelId },
    });
    newMessageForm.setFieldValue("newMessage", "");
  };

  return (
    <Box className={classes.boxContainer}>
      <Group direction="column">
        <Messages messages={chat} />
        <NewMessageForm
          messageFormData={newMessageForm}
          handleSubmitMessage={handleSubmitMessage}
        />
      </Group>
    </Box>
  );
}

const useStyles = createStyles({
  boxContainer: {
    flex: 1,
    position: "relative",
    height: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
  },
});

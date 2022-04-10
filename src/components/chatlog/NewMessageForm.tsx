import React from "react";
import { TextInput, Box, createStyles } from "@mantine/core";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";

type Props = {
  messageFormData: UseForm<{
    newMessage: string;
  }>;
  handleSubmitMessage: (newMessage: string) => void;
};

export default function NewMessageForm({
  messageFormData,
  handleSubmitMessage,
}: Props) {
  const { classes } = useStyles();
  return (
    <Box  className={classes.boxContainer}>
      <form
        onSubmit={messageFormData.onSubmit((values) =>
          handleSubmitMessage(values.newMessage)
        )}
      >
        <TextInput
          classNames={{ root: classes.messageInput }}
          required
          placeholder="New Message"
          {...messageFormData.getInputProps("newMessage")}
        />
      </form>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  boxContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: "2rem",
    backgroundColor: "white",
  },
  messageInput: {
    width: "100%",
  },
}));

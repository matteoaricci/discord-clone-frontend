import React from "react";
import { TextInput, Box } from "@mantine/core";
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
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        position: "absolute",
        bottom: 0,
        padding: "2rem",
        backgroundColor: "white"
      })}
    >
      <form
        onSubmit={messageFormData.onSubmit((values) =>
          handleSubmitMessage(values.newMessage)
        )}
      >
        <TextInput
          sx={(theme) => ({
            // input: { paddingInline: "2rem" },
          })}
          required
          placeholder="New Message"
          {...messageFormData.getInputProps("newMessage")}
        />
      </form>
    </Box>
  );
}

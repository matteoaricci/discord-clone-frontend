import React from "react";
import { useForm } from "@mantine/hooks";
import { TextInput, Button, Group, createStyles, Paper } from "@mantine/core";

type Props = {};

type submitProps = {
  username: string;
  password: string;
};

export default function Login({}: Props) {
  const loginForm = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const { classes } = useStyles();

  const handleLoginSubmit = (values: submitProps) => {
    localStorage.setItem("user", values.username);
    window.location.reload();
  };
  return (
    <Group className={classes.groupContainer} mx="auto">
      <Paper className={classes.paperContainer} shadow="xs" radius="lg" mx="auto">
        <form
          onSubmit={loginForm.onSubmit((values) => handleLoginSubmit(values))}
        >
          <TextInput
            placeholder="Username or Email"
            {...loginForm.getInputProps("username")}
          />
          <TextInput
            mt="sm"
            placeholder="Password"
            type="password"
            {...loginForm.getInputProps("password")}
          />
          <Group position="right" mt="sm">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Paper>
    </Group>
  );
}

const useStyles = createStyles({
  groupContainer: {
    width: "100%",
    height: "100vh",
  },
  paperContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "1.5rem",
  },
});

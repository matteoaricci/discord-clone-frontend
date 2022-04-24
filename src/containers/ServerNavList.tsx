import React from "react";
import { ActionIcon, Box, createStyles, Text } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/reducers";
import { Server } from "../state/actions/serverActions";

type Props = {};

export default function ServerNavList({}: Props) {
  const servers = useSelector((state: RootState) => state.server.servers);
  const currentServer = useSelector((state: RootState) => state.server.currentServer)
  const { classes } = useStyles();
  return (
    <Box className={classes.boxContainer}>
      {servers.map((server) => {
        return (
          <div key={server.id} className={classes.serverDiv}>
            <Text size="xl" weight={700}>
              {formatServerName(server.name)}
            </Text>
          </div>
        );
      })}
      <div className={classes.serverDiv}>
        <Text size="xl" weight={700}>
          +
        </Text>
      </div>
    </Box>
  );
}

const formatServerName = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
};

const useStyles = createStyles((theme) => ({
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100px",
    backgroundColor: theme.colors.dark[7],
  },
  serverDiv: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
    height: "4rem",
    backgroundColor: theme.colors.dark[4],
    color: "white",
    width: "4rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease",
    "&:hover": {
      borderRadius: "25%",
    },
  },
}));

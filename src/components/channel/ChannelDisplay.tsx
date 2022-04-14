import React from "react";
import { Channel } from "../../containers/ChannelContainer";
import { BiHash } from "react-icons/bi";
import { Group, Text, createStyles } from "@mantine/core";

type Props = {
  channel: Channel;
  handleChannelClick: (channel: string) => void;
  isSelected: boolean;
};

type StylesType = {
  isSelected: boolean;
};

export default function ChannelDisplay({
  channel,
  handleChannelClick,
  isSelected,
}: Props) {
  const { classes } = useStyles({ isSelected });
  return (
    <Group
      onClick={() => handleChannelClick(channel.id)}
      className={classes.groupContainer}
      my="0.5rem"
      mx="0.5rem"
    >
      <BiHash />
      <Text>{channel.name}</Text>
    </Group>
  );
}

const useStyles = createStyles((theme, { isSelected }: StylesType) => ({
  groupContainer: {
    paddingLeft: "1rem",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.dark[0],
    },
    backgroundColor: isSelected ? theme.colors.dark[0] : "white",
  },
}));

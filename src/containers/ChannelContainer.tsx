import React from "react";
import { createStyles, Box, Navbar } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/reducers";
import ChannelDisplay from "../components/channel/ChannelDisplay";
import * as channelActions from "../state/actions/channelActions";

type Props = {};

export type Channel = {
  name: string;
  id: string;
};

export default function ChannelContainer({}: Props) {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const channels = useSelector((state: RootState) => state.channel.channels);
  const currentChannel = useSelector(
    (state: RootState) => state.channel.currentChannel
  );
  const handleChannelClick = (channel: Channel) => {
    dispatch({ type: channelActions.setCurrentChannel.type, payload: channel });
  };
  return (
    <Box className={classes.boxContainer}>
      <Navbar>
        <Navbar.Section>
          {channels.map((channel) => {
            return (
              <ChannelDisplay
                key={channel.id}
                channel={channel}
                handleChannelClick={handleChannelClick}
                isSelected={channel.id === currentChannel.id}
              />
            );
          })}
        </Navbar.Section>
      </Navbar>
    </Box>
  );
}

const useStyles = createStyles({
  boxContainer: {
    height: "100vh",
    flex: 0.25,
  },
});

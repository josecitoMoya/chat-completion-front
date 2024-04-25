"use client";

import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  FormControl,
  Input,
  IconButton,
  Icon,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import { RiSendPlaneFill } from "react-icons/ri";

import { useState } from "react";
import { useSelector } from "react-redux";
import MiMessage from "@/common/MiMessage";

const Chat = () => {
  const user = useSelector((state) => state.user.user);
  const [input, setInput] = useState("");

  const message = user.data;

  const sendMessage = () => {};
  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection={"column"}
      transition={"background-color 200ms"}
    >
      <Flex
        align={"center"}
        position={"sticky"}
        top={0}
        zIndex={19}
        p={4}
        h={"81px"}
        borderBottom={"1px solid"}
        transitionDuration={"200ms"}
      >
        <Avatar name={user.user} />
        <Box ml={4} flex={1}>
          <Heading as={"h3"} size={"lg"} />
          <Text>{user.user}</Text>
        </Box>
      </Flex>
      <Box
        id="msg-box"
        p={6}
        pb={0}
        flex={1}
        overflow={"scroll"}
        className="invisible"
      >
        {message.map((data, i) => (
          <MiMessage data={data} key={i} />
        ))}
      </Box>
      <FormControl
        p={2}
        zIndex={3}
        as={"form"}
        display={"flex"}
        alignItems={"center"}
      >
        <InputGroup size="md">
          <Input
            position={"sticky"}
            bottom={0}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              ml={2}
              onClick={sendMessage}
              icon={<Icon as={RiSendPlaneFill} />}
              _focus={{ boxShadow: "none" }}
              size={"md"}
              isRound
            />
            <Button
              hidden
              disabled={!input}
              type="submit"
              onClick={sendMessage}
            >
              Send
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default Chat;

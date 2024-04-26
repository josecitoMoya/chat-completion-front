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

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import MiMessage from "@/common/MiMessage";

import { useInput } from "@/hooks/useInput";
import { setMessage } from "@/store/slices/messages.slice";
import { persistence } from "@/services/persistence.service";
import { setCurrenttUser, setUserMessages } from "@/store/slices/user.slice";
import { getMessages } from "@/services/messages.services";
import { logout } from "@/services/logout.service";

const Chat = () => {
  const user = useSelector((state) => state.user.currentUser?.name);
  const messages = useSelector((state) => state.user?.userMessages);
  const dispatch = useDispatch();
  const router = useRouter();
  const input = useInput();

  useEffect(() => {
    try {
      persistence().then((token) => {
        if (!token) return router.push("/login");

        dispatch(setCurrenttUser(token.user));
        dispatch(setUserMessages(token.messages));
      });
    } catch (error) {}
  }, []);

  const messageSender = async (e) => {
    try {
      e.preventDefault();

      const delivery = {
        message: input.value,
        email: user.email,
      };

      const rta = dispatch(sendMessage(delivery)).then((res) =>
        dispatch(setMessage(res.data)).then(() => router.push("/chat"))
      );
    } catch (err) {
      console.error;
    }
  };

  const handleLogout = () => {
    logout();

    dispatch(setCurrenttUser(null));

    router.push("/");
  };

  // if (!user.user) {
  //   router.push("/");
  // }

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
        <Avatar name={user} />
        <Box ml={4} flex={1}>
          <Heading as={"h3"} size={"lg"} />
          <Button onClick={handleLogout}>Cerrar Sesion</Button>
        </Box>
        <Box ml={4} flex={1}>
          <Heading as={"h3"} size={"lg"} />
          <Text>{user}</Text>
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
        {messages?.map((data, i) => (
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
          <Input position={"sticky"} bottom={0} {...input} />
          <InputRightElement width="4.5rem">
            <IconButton
              ml={2}
              onClick={messageSender}
              icon={<Icon as={RiSendPlaneFill} />}
              _focus={{ boxShadow: "none" }}
              size={"md"}
              isRound
            />
            <Button
              hidden
              disabled={!input}
              type="submit"
              onClick={messageSender}
            ></Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default Chat;

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

import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import MiMessage from "@/common/MiMessage";

import { useInput } from "@/hooks/useInput";
import { setMessage } from "@/store/slices/messages.slice";
import { persistence } from "@/services/persistence.service";
import { setCurrenttUser, setUserMessages } from "@/store/slices/user.slice";
import { getMessages, sendMessage } from "@/services/sendMessages.services";
import { logout } from "@/services/logout.service";

const Chat = () => {
  const user = useSelector((state) => state.user.currentUser);
  const messages = useSelector((state) => state.user?.userMessages);
  const dispatch = useDispatch();
  const router = useRouter();
  const input = useInput();
  const mensajesRef = useRef(null);

  const [mensajes, setMensajes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      persistence().then((token) => {
        if (!token) return router.push("/login");

        dispatch(setCurrenttUser(token.user));
        setMensajes(token.messages);
      });
    } catch (error) {}
  }, [messages]);

  useEffect(() => {
    if (mensajesRef.current) {
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight;
    }
  }, [mensajes]);

  useEffect(() => {
    if (mensajesRef.current) {
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight;
    }
  }, []);

  const messageSender = async (e) => {
    try {
      setIsLoading(true);

      e.preventDefault();

      const delivery = {
        message: input.value,
        email: user.email,
      };

      const messageSent = await sendMessage(delivery);

      input.setValue("");

      dispatch(setUserMessages(messageSent));

      setIsLoading(false);

      input.value("");
    } catch (err) {
      console.error;
    }
  };

  const handleLogout = async () => {
    await logout();

    router.push("/login");
  };

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
        <Avatar name={user.name} />
        <Box ml={4} flex={1}>
          <Heading as={"h3"} size={"lg"} />
          <Button onClick={handleLogout}>Cerrar Sesion</Button>
        </Box>
        <Box ml={4} flex={1}>
          <Heading as={"h3"} size={"lg"} />
          <Text>{user.name}</Text>
        </Box>
      </Flex>
      <Box
        id="msg-box"
        p={6}
        pb={0}
        flex={1}
        overflow={"scroll"}
        className="invisible"
        ref={mensajesRef}
      >
        {!isLoading ? (
          mensajes?.map((data, i) => <MiMessage data={data} key={i} />)
        ) : (
          <Text>Loading</Text>
        )}
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
            {...input}
            placeholder="Write rigth here!"
          />
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

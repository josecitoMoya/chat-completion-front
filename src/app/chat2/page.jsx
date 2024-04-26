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
import { useCompletion } from "ai/react";
import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import MiMessage from "@/common/MiMessage";

import { useInput } from "@/hooks/useInput";
import { setMessage } from "@/store/slices/messages.slice";
import { persistence } from "@/services/persistence.service";
import { setCurrenttUser, setUserMessages } from "@/store/slices/user.slice";
import { getMessages } from "@/services/messages.services";

const Chat2 = () => {
  const [content, setContent] = useState("");
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: "/api/config/gpt",
  });

  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection={"column"}
      transition={"background-color 200ms"}
    >
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Enter zarasa"
          onChange={handleInputChange}
        />
        <p>Completion sarasa: {completion}</p>
        <button disabled={isLoading} type="submit" onClick={stop}>
          submit
        </button>
      </form>
    </Box>
  );
};

export default Chat2;

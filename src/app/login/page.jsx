"use client";

import {
  Button,
  InputRightElement,
  InputGroup,
  Box,
  Center,
  FormControl,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";

import MiButton from "@/common/MyButton";

import { useInput } from "@/hooks/useInput";

// import { getMessages } from "@/store/thunks/messages.thunk";
import { login } from "@/services/login.services";
import { setCurrenttUser, setUserMessages } from "@/store/slices/user.slice";
import { setMessages } from "@/store/slices/messages.slice";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const email = useInput();
  const password = useInput();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: email.value,
        password: password.value,
      };

      const user = await login(userData);

      if (user.user) {
        dispatch(setCurrenttUser(user.user));
        toast({
          position: "top",
          title: `Wellcome back ${user.user}`,
          status: "success",
          isClosable: true,
          duration: 3000,
        });
        router.push("/chat");
      } else {
        toast({
          position: "top",
          title: user.message,
          status: "error",
          isClosable: true,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Center h="75%" color="white" marginTop="5%" padding="10">
        <Box
          width="50"
          borderWidth="3px"
          borderRadius="lg"
          display="inline-block"
          padding="50px"
          alignItems="center"
          justifyContent="center"
          color="black"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="2xl"
          textTransform="uppercase"
        >
          <Text fontSize="4xl" textAlign="center">
            Login
          </Text>

          <FormControl padding="30px" onSubmit={handleSubmit}>
            <Stack spacing="5">
              <InputGroup size="md">
                <Input
                  {...email}
                  placeholder="email"
                  type="email"
                  backgroundColor="white"
                  width="100%"
                  required={true}
                />

                <Input
                  {...password}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <MiButton
                type="submit"
                placeholder="Login"
                onClick={handleSubmit}
              />
              <Text fontSize={"sm"} textAlign={"center"}>
                I don't hace an account
              </Text>
              <MiButton
                placeholder="Signup"
                onClick={() => {
                  router.push("signup");
                }}
              />
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </Box>
  );
}

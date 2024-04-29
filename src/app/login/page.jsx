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
      <Center
        color="white"
        marginTop={{ base: "10%", md: "5%" }}
        padding={{ base: "5%", md: "10%" }}
      >
        <Box
          maxW={{ base: "100%", md: "50%" }} // Ancho máximo del contenedor
          borderWidth="3px"
          borderRadius="lg"
          padding={{ base: "5%", md: "10%" }} // Espaciado interno
          textAlign="center"
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="semibold"
            textTransform="uppercase"
          >
            Login
          </Text>

          <FormControl padding="30px" onSubmit={handleSubmit}>
            <Stack
              spacing="5"
              direction={{ base: "column", md: "row" }}
              alignItems="center"
              justifyContent="center"
            >
              <InputGroup size="md" flexDirection={"column"}>
                <Input
                  placeholder="Email"
                  type="email"
                  backgroundColor="white"
                  width={{ base: "100%", md: "auto" }}
                  mb={{ base: 4, md: 0 }}
                  required={true}
                />

                <Input
                  pr="4.5rem"
                  type="password"
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    Show
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button type="submit" variant="solid" colorScheme="blue">
                Login
              </Button>
            </Stack>
          </FormControl>
          <Text fontSize={"sm"}>I don't have an account</Text>
          <Button variant="link" onClick={() => {}}>
            Signup
          </Button>
        </Box>
      </Center>
    </Box>
  );
}

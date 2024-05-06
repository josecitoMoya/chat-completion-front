"use client";

import {
  Button,
  InputRightElement,
  InputGroup,
  Box,
  Center,
  FormControl,
  Input,
  Link,
  Text,
  useToast,
  FormHelperText,
  Divider,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useInput } from "@/hooks/useInput";
import { createUser } from "@/services/signup.services";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const name = useInput();
  const email = useInput();
  const password = useInput();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const userData = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      console.log("SOIY COS ", userData);

      const newUser = await createUser(userData);

      if (newUser.name) {
        toast({
          position: "top",
          title: newUser.message,
          status: "success",
          isClosable: true,
          duration: 3000,
        });
        router.push("/login");
      } else {
        toast({
          position: "top",
          title: newUser.message,
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
    <form onSubmit={handleSubmit}>
      <Center h={"100vh"}>
        <FormControl
          className="form"
          bg="#fff"
          display="block"
          padding="1rem"
          maxW="350px"
          borderRadius="0.5rem"
          boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        >
          <Text
            className="form-title"
            fontSize="1.25rem"
            lineHeight="1.75rem"
            fontWeight="600"
            textAlign="center"
            color="#000"
          >
            Signup!
          </Text>
          <Box className="input-container" position="relative">
            <Input
              {...name}
              type="text"
              placeholder="User name"
              bg="#fff"
              outline="none"
              border="1px solid #e5e7eb"
              margin="8px 0"
              padding="1rem"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              width="100%"
              borderRadius="0.5rem"
              _focus={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}
            />
            <Box
              as="span"
              display="grid"
              position="absolute"
              top="0"
              bottom="0"
              right="0"
              paddingX="1rem"
              placeContent="center"
            ></Box>
          </Box>
          <Box className="input-container" position="relative">
            <Input
              {...email}
              isRequired
              type="email"
              placeholder="Enter email"
              bg="#fff"
              outline="none"
              border="1px solid #e5e7eb"
              margin="8px 0"
              padding="1rem"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              width="100%"
              borderRadius="0.5rem"
              _focus={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}
            />
            <Box
              as="span"
              display="grid"
              position="absolute"
              top="0"
              bottom="0"
              right="0"
              paddingX="1rem"
              placeContent="center"
            ></Box>
          </Box>
          <Box className="input-container" position="relative">
            <InputGroup flexDirection={"column"} size={"md"}>
              <Input
                {...password}
                isRequired
                type={!show ? "password" : "text"}
                placeholder="Enter password"
                bg="#fff"
                outline="none"
                border="1px solid #e5e7eb"
                margin="8px 0"
                padding="1rem"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                width="100%"
                borderRadius="0.5rem"
                _focus={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}
              />
              <InputRightElement
                w={"25%"}
                h={"100%"}
                display="flex"
                alignItems="center"
              >
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {!show ? "show" : "hide"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText w={"100%"}>
              The password must have a minimum of 8 characters, at least one
              number, and one uppercase letter.
            </FormHelperText>
          </Box>
          <Divider p={"5%"} />
          <Button
            className="submit"
            type="submit"
            bg="#4F46E5"
            color="#ffffff"
            fontSize="0.875rem"
            lineHeight="1.25rem"
            fontWeight="500"
            width="100%"
            borderRadius="0.5rem"
            textTransform="uppercase"
            _hover={{ bg: "#4338CA" }}
            _active={{ bg: "#4338CA", opacity: ".7" }}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </FormControl>
      </Center>
    </form>
  );
}

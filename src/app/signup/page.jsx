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
import { createUser } from "@/store/thunks/user.thunk";

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

      const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      dispatch(createUser(newUser))
        .then((res) => res.data)
        .then((res) => {
          if (res.name) {
            toast({
              position: "top",
              title: res.message,
              status: "success",
              isClosable: true,
              duration: 3000,
            });
            router.push("/login");
          } else {
            toast({
              position: "top",
              title: res.message,
              status: "error",
              isClosable: true,
              duration: 3000,
            });
          }
        })
        .catch((err) => console.error(err));
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
            Crear cuenta
          </Text>

          <FormControl padding="30px">
            <Stack spacing="5">
              <InputGroup size="md" justifyContent="space-between">
                <Input
                  {...name}
                  placeholder="User Name"
                  type="text"
                  backgroundColor="white"
                  width="100%"
                  required={true}
                />
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
                placeholder="Signup"
                onClick={handleSubmit}
              />
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </Box>
  );
}

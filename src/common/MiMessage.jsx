import Link from "next/link";
import { useSelector } from "react-redux";

const { Text, Box } = require("@chakra-ui/react");

const MiMessage = ({ data }) => {
  const user = useSelector((state) => state.user.currentUser.name);

  const messageAuthor = data.role === "user" ? "sender" : "reciever";

  return (
    <Box>
      {messageAuthor === "sender" ? (
        <Text
          w={"fit-content"}
          p={4}
          rounded={"md"}
          margin={2}
          ml={"auto"}
          maxW={"80%"}
          pb={6}
          position={"relative"}
          textAlign={"right"}
          wordBreak={"break-word"}
          bg={"lightblue"}
          minW={"71px"}
          color={"white"}
        >
          {data.content}
          <Text
            as={"span"}
            color={"grey"}
            p={4}
            fontSize={"10px"}
            fontWeight={"bold"}
            position={"absolute"}
            top={"-10px"}
            textAlign={"right"}
            right={0}
          >
            {user}
          </Text>
        </Text>
      ) : (
        <Text
          w={"fit-content"}
          p={4}
          rounded={"md"}
          margin={2}
          minW={"71px"}
          maxW={"80%"}
          pb={6}
          position={"relative"}
          textAlign={"left"}
          wordBreak={"break-word"}
          bg={"lightgray"}
        >
          {data.content}
          <Text
            as={"span"}
            color={"black"}
            p={4}
            fontSize={"10px"}
            fontWeight={"bold"}
            position={"absolute"}
            top={"-10px"}
            textAlign={"right"}
            left={0}
          >
            {data.role}
          </Text>
        </Text>
      )}
    </Box>
  );
};

export default MiMessage;

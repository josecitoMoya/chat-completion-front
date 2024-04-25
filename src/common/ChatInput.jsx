import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import MyButton from "./MyButton";

const ChatInput = ({
  placeholder,
  size,
  height,
  width,
  border,
  borderColor,
  margin,
  overflow,
}) => {
  const [message, setMessage] = useState("");
  const handleClick = () => setMessage();
  return (
    <div>
      <InputGroup size={"md"} justifyContent="space-between">
        <Input
          type="text"
          placeholder={placeholder}
          size={size}
          height={height}
          width={width}
          border={border}
          borderColor={borderColor}
          margin={margin}
          overflow={overflow}
        />
        <InputRightElement width="4.5rem">
          <MyButton
            height="9"
            size="sm"
            onClick={handleClick}
            placeholder="Send"
          ></MyButton>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default ChatInput;

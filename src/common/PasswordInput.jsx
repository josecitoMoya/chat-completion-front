import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import MyButton from "./MyButton";

const PasswordInput = ({
  placeholder,
  size,
  height,
  width,
  border,
  borderColor,
  margin,
  overflow,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <InputGroup size={"md"} justifyContent="space-between">
        <Input
          type={show ? "text" : "password"}
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
            placeholder={show ? "Hide" : "Show"}
          ></MyButton>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default PasswordInput;

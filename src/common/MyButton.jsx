import { Button } from "@chakra-ui/react";

const MyButton = ({
  placeholder,
  size,
  height,
  width,
  border,
  borderColor,
  onClick,
  padding,
  type,
}) => {
  return (
    <Button
      padding={padding}
      size={size}
      height={height}
      width={width}
      border={border}
      borderColor={borderColor}
      onClick={onClick}
      type={type}
    >
      {placeholder}
    </Button>
  );
};

export default MyButton;

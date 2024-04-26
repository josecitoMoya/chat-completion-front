import { Input } from "@chakra-ui/react";

const Minput = ({
  placeholder,
  size,
  height,
  width,
  border,
  borderColor,
  margin,
  backgroundColor,
  required,
  type,
}) => {
  return (
    <div>
      <Input
        margin={margin}
        placeholder={placeholder}
        size={size}
        height={height}
        width={width}
        border={border}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        type={type}
        required={required}
      ></Input>
    </div>
  );
};

export default Minput;

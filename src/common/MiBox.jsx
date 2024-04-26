const { Box } = require("@chakra-ui/react");

const MiBox = ({ maxW, borderWidth, borderRadius, overflow, padding }) => {
  return (
    <>
      <Box
        maxW={maxW}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        overflow={overflow}
        padding={padding}
      />
    </>
  );
};

export default MiBox;

"use client";

import ChatInput from "@/common/ChatInput";
import MiCard from "@/common/miCard";
import { Box, Grid, GridItem, Wrap } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Chat() {
  const cards = useSelector((state) => state.user.user.data);

  console.log("Estoy antes de cards", cards);
  return (
    <Box>
      <Grid h="200px" gap={4}>
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bg="whitesmoke"
          zIndex="999"
          h="50px"
          borderColor="black"
          borderRadius="sm "
        >
          <h1>Nav bar</h1>
        </Box>
        <Box marginTop="20px" pt={45} pb={45}>
          <GridItem colSpan={4} bg="lightgrey" maxH="100%">
            {cards.map((data, i) => (
              <MiCard data={data} key={i} />
            ))}
          </GridItem>
        </Box>
        <Box
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          bg="whitesmoke"
          zIndex="999"
          border="3px"
          h="50px"
        >
          <ChatInput />
        </Box>
      </Grid>
    </Box>
  );
}

"use client";

import { Card, CardBody, Stack, Heading, Text, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function MiCard(data) {
  const user = useSelector((state) => state.user.user.user);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w={"100%"}
    >
      <Stack w="100%">
        <CardBody bgColor={data.data.role != "user" ? "darkgray" : "lightblue"}>
          <Heading
            size="md"
            textAlign={data.data.role != "user" ? "right" : "left"}
          >
            {data.data.role === "assistant" ? data.data.role : user}
          </Heading>
          <Text py="2" textAlign={data.data.role != "user" ? "right" : "left"}>
            {data.data.content}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

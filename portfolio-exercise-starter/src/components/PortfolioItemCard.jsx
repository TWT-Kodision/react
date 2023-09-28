import { Image, Card, CardHeader, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

export const PortfolioItemCard = ({ item, clickFn }) => {
  return (
    <div className="App">
      <Card
        maxW="sm"
        key="filled"
        variant="outline"
        cursor={"pointer"}
        onClick={() => clickFn(item)}
      >
        <CardHeader>
          <Heading size="md">{item.title}</Heading>
        </CardHeader>
        <Image src={item.imageUrl} borderradius="full" />
        {item.summary}
        {item.skills}
      </Card>
    </div>
  );
};

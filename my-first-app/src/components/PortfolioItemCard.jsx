import { Center, Image, Text } from "@chakra-ui/react";

export const portfolioItemCard = ({ drink, clickFn, ...buttonProps }) => {
  return (
    <ul>
      <Center gap={8} cursor={"pointer"} onClick={() => clickFn(drink)}>
        <Image
          src={drink.imgUrl}
          alt={drink.alt}
          height={buttonProps.imageHeight}
          width={buttonProps.imageWidth}
        />
        <Text>{drink.name}</Text>
      </Center>
    </ul>
  );
};

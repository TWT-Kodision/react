import {
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";

export const DrinkChoice = ({ drink, clickFn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const [size, setSize] = React.useState("md");

  return (
    <Center flexDir={"column"} gap={4}>
      <Heading fontSize={"2xl"} color="gray.600">
        Your choice: {drink.name}
      </Heading>
      <Image
        src={drink.imgUrl}
        w={100}
        h={100}
        borderRadius={"2xl"}
        alt={drink.alt}
      />
      <Text>Your drink will be ready in a few minutes</Text>
      <Flex mt={4}>
        <Button onClick={onOpen} mr={4}>
          Confirm order
        </Button>
        <Button onClick={() => clickFn()} variant="ghost">
          Change selection
        </Button>
      </Flex>

      <Modal size={["full", "md"]} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm your order</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            height={["full", "fit-content"]}
            display="flex"
            justifyContent="center"
            alignItems={"center"}
          >
            <Text>1x {drink.name}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={4}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
/*
function SizeExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        >{`Open ${size} Modal`}</Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}*/

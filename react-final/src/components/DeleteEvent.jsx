import { useDisclosure, Modal, Button } from "@chakra-ui/react";

export const DeleteEvent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ul>
      <Modal isOpen={isOpen} onClose={onClose}></Modal>
      <Button
        onClick={() => {
          console.log("click delete");
        }}
        colorScheme="red"
        m={3}
      >
        Delete Event
      </Button>
    </ul>
  );
};

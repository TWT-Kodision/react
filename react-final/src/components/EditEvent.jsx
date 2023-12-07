import {
  useDisclosure,
  Modal,
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
} from "@chakra-ui/react";

import { EventForm } from "./EventForm";

export const EditEvent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formLabels = {
    placeholders: {
      user: "Select user",
      title: "Title",
      description: "Description",
      category: "Select category",
      image: "Image url",
      date: "Date",
      starttime: "Starttime",
      endtime: "Endtime",
      location: "Location",
    },
    buttons: {
      sendButton: "Edit event",
    },
  };

  return (
    <ul>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EventForm isOpen={isOpen} onClose={onClose} formLabels={formLabels} />
      </Modal>
      <Button
        onClick={() => {
          console.log("click edit event");
        }}
        colorScheme="blue"
        m={3}
      >
        Edit event
      </Button>
    </ul>
  );
};

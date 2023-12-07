import {
  useDisclosure,
  Modal,
  Card,
  CardHeader,
  CardBody,
  Text,
} from "@chakra-ui/react";

import { EventForm } from "./EventForm";

export const CreateEvent = () => {
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
      sendButton: "Add new event",
    },
  };

  return (
    <ul>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EventForm isOpen={isOpen} onClose={onClose} formLabels={formLabels} />
      </Modal>
      <Card
        gap={8}
        align="center"
        cursor={"pointer"}
        bg={"green.200"}
        onClick={onOpen}
      >
        <CardHeader size="md">
          <Text align="center" fontSize="2xl" color="tomato">
            Create new event
          </Text>
        </CardHeader>
        <CardBody>
          <Text>Click for creating a new event </Text>
        </CardBody>
      </Card>
    </ul>
  );
};
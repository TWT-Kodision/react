import {
  useDisclosure,
  Modal,
  Card,
  CardHeader,
  CardBody,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { EventForm } from "./EventForm";
export const CreateEvent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const noErrorState = { happened: false, msg: "" };
  const [error, setError] = useState(noErrorState);
  const toast = useToast();
  const serverError = {
    title: "Something went wrong while creating the event",
    description: "server error: " + error.msg,
    status: "error",
    duration: 5000,
    isClosable: true,
  };

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
    formTitle: "Create event",
    action: "new",
  };

  const addEventToServer = async (newEvent) => {
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        body: JSON.stringify(newEvent),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      }).then((response) => {
        if (!response.ok) {
          setError({
            happened: true,
            msg: response.status,
          });
          throw new Error(response);
        }
      });
      newEvent.id = (await response.json()).id;
      console.log("add event API");
    } catch (err) {
      console.log("error");
      setError({
        happened: true,
        msg: err.message,
      });
      toast(serverError);
    }
  };

  const addNewEvent = (newEventObject) => {
    if (!error.happened) {
      addEventToServer(newEventObject);
      console.log("add event succesful");
      window.location.reload(false);
    }
  };

  return (
    <ul>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EventForm
          isOpen={isOpen}
          onClose={onClose}
          formLabels={formLabels}
          formActions={addNewEvent}
        />
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

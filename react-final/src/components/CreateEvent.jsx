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
import { useNavigate } from "react-router-dom";
export const CreateEvent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const noErrorState = { happened: false, msg: "" };
  const [error, setError] = useState(noErrorState);
  const navigate = useNavigate();
  const toast = useToast();
  const toastServerError = {
    title: "Something went wrong while creating the event",
    description: "server error: " + error.msg,
    status: "error",
    duration: 5000,
    isClosable: true,
  };
  const toastEventAdded = {
    title: "New event created",
    description: "New event succesfully created",
    status: "success",
    duration: 3000,
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
      });
      newEvent.id = (await response.json()).id;
      console.log("add event API");
    } catch (err) {
      console.log("adding error");
      setError({
        happened: true,
        msg: err.message,
      });
      toast(toastServerError);
    }
  };

  const addNewEvent = (newEventObject) => {
    if (!error.happened) {
      addEventToServer(newEventObject);
      console.log("event succesfully added");
      onClose();
      navigate(`/`);
      navigate(`/events`);
      toast(toastEventAdded);
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

import { useDisclosure, Modal, Button, useToast } from "@chakra-ui/react";
import { EventForm } from "./EventForm";
import { useState } from "react";
import { ConvertDate } from "./Utils";
export const EditEvent = ({ user, eventInfo, dateTime, setEvent }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const noErrorState = { happened: false, msg: "" };
  const [error, setError] = useState(noErrorState);
  const toast = useToast();

  const succesToastParam = {
    title: "Event changed succesfully",
    description: "Event has been changed",
    status: "success",
    duration: 3000,
    isClosable: true,
  };

  const errorToastParam = {
    title: "Error: Event not changed",
    description: "server error: " + error.msg,
    status: "error",
    duration: 6000,
    isClosable: true,
  };

  const updateEventInServer = async (EditedEvent) => {
    try {
      await fetch(`http://localhost:3000/events/${EditedEvent.id}`, {
        method: "PATCH",
        body: JSON.stringify(EditedEvent),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
    } catch (err) {
      console.log(err);
      console.log("error PATCH event");
      setError({
        happened: true,
        msg: err.message,
      });
      toast(errorToastParam);
    }
  };
  console.log(eventInfo);
  const formLabels = {
    placeholders: {
      id: eventInfo.id,
      user: user.id,
      title: eventInfo.title,
      description: eventInfo.description,
      category: eventInfo.categoryIds,
      image: eventInfo.image,
      date: ConvertDate(dateTime.date),
      starttime: dateTime.starttime,
      endtime: dateTime.endtime,
      location: eventInfo.location,
    },
    buttons: {
      sendButton: "Edit event",
    },
    formTitle: "Edit event",
    action: "edit",
  };

  const editEventObject = (editedEventObject) => {
    updateEventInServer(editedEventObject);
    if (!error.happened) {
      console.log("adding complete");
      setEvent(editedEventObject);
      onClose();
      toast(succesToastParam);
    }
  };

  return (
    <ul>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EventForm
          isOpen={isOpen}
          onClose={onClose}
          formLabels={formLabels}
          formActions={editEventObject}
        />
      </Modal>
      <Button
        onClick={() => {
          onOpen();
        }}
        colorScheme="blue"
        m={3}
      >
        Edit event
      </Button>
    </ul>
  );
};

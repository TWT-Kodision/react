import { useDisclosure, Modal, Button, useToast } from "@chakra-ui/react";
import { EventForm } from "./EventForm";
import { useState } from "react";
export const EditEvent = ({
  categories: eventCategories,
  user,
  eventInfo,
  dateTime,
  setEvent,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const noErrorState = { happened: false, msg: "" };
  const [error, setError] = useState(noErrorState);

  //converts date to yyyy-MM-dd
  const convertDate = (date) => {
    const [day, month, year] = date.split("-");
    return year + "-" + month + "-" + day;
  };
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
      const response = await fetch(
        `http://localhost:3000/events/${EditedEvent.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(EditedEvent),
          headers: { "Content-Type": "application/json;charset=utf-8" },
        }
      ).then((response) => {
        if (!response.ok) {
          setError({
            happened: true,
            msg: response.status,
          });
          throw new Error(response);
        }
      });
      EditedEvent.id = (await response.json()).id;
    } catch (err) {
      console.log("error PATCH event");
      setError({
        happened: true,
        msg: err.message,
      });
      toast(errorToastParam);
    }
  };

  const formLabels = {
    placeholders: {
      id: eventInfo.id,
      user: user.id,
      title: eventInfo.title,
      description: eventInfo.description,
      category: eventCategories,
      image: eventInfo.image,
      date: convertDate(dateTime.date),
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
    console.log("adding complete");
    if (!error.happened) {
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

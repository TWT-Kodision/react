import { useDisclosure, Modal, Button } from "@chakra-ui/react";

import { EventForm } from "./EventForm";

export const EditEvent = ({ categories, user, eventInfo, dateTime }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(eventInfo.title);
  console.log(categories);
  const formLabels = {
    placeholders: {
      user: user.name,
      title: eventInfo.title,
      description: eventInfo.description,
      category: categories,
      image: eventInfo.image,
      date: dateTime.date,
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

  const click = () => {
    return "click";
  };

  console.log(eventInfo);
  return (
    <ul>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EventForm
          isOpen={isOpen}
          onClose={onClose}
          formLabels={formLabels}
          click={click}
        />
      </Modal>
      <Button
        onClick={() => {
          console.log("test test");
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

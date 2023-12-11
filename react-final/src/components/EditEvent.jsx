import { useDisclosure, Modal, Button } from "@chakra-ui/react";
import { EventForm } from "./EventForm";
import { updateEvent } from "./connectToAPI";

export const EditEvent = ({
  categories: eventCategories,
  user,
  eventInfo,
  dateTime,
  setEvent,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //converts date to yyyy-MM-dd
  const convertDate = (date) => {
    const [day, month, year] = date.split("-");
    return year + "-" + month + "-" + day;
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

  const getEditedEventObject = (editedEventObject) => {
    updateEvent(editedEventObject);
    setEvent(editedEventObject);
    onClose();
  };

  return (
    <ul>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EventForm
          isOpen={isOpen}
          onClose={onClose}
          formLabels={formLabels}
          newEventObject={getEditedEventObject}
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

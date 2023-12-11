import { useDisclosure, Modal, Button } from "@chakra-ui/react";
import { useState } from "react";
import { EventForm } from "./EventForm";

export const EditEvent = ({
  categories: eventCategories,
  user,
  events,
  eventInfo,
  dateTime,
  usersAndCategories,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editedEventsList, setEditedEventsList] = useState([]);

  //converts date to yyyy-MM-dd
  const convertDate = (date) => {
    const [day, month, year] = date.split("-");
    return year + "-" + month + "-" + day;
  };

  const formLabels = {
    placeholders: {
      id: eventInfo.id,
      user: user.name,
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

  const editEventList = (editedEvent) => {
    const newList = [];
    console.log(editedEvent);
    events.map((event) => {
      newList.push(event.id == editedEvent.id ? editedEvent : event);
      setEditedEventsList(newList);
    });
  };

  const getEditedEventObject = (editedEventObject) => {
    console.log(editedEventObject);
    console.log("event edited");
    return editedEventObject;
  };

  const makeNewObjectComplete = (editedEventObject) => {
    editEventList(getEditedEventObject(editedEventObject));
    const newJsonContent = {
      users: usersAndCategories.users,
      events: editedEventsList,
      catagories: usersAndCategories.categories,
    };
    console.log(newJsonContent);
  };

  return (
    <ul>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EventForm
          isOpen={isOpen}
          onClose={onClose}
          formLabels={formLabels}
          newEventObject={makeNewObjectComplete}
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

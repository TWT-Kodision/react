import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Select,
} from "@chakra-ui/react";

import { useState, React } from "react";

import { addEvent } from "../components/connectToAPI";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const events = await fetch(`http://localhost:3000/events`);
  const categories = await fetch("http://localhost:3000/categories");
  const users = await fetch("http://localhost:3000/users");
  return {
    events: await events.json(),
    categories: await categories.json(),
    users: await users.json(),
  };
};

export const EventForm = ({ isOpen, onClose, formLabels }) => {
  const { events, categories, users } = useLoaderData();

  const isEdit = formLabels.action == "edit";
  console.log(isEdit);

  const [title, setTitle] = useState(
    isEdit ? formLabels.placeholders.title : ""
  );
  const [startTime, setStartTime] = useState(
    isEdit ? formLabels.placeholders.starttime : ""
  );
  const [endTime, setEndTime] = useState(
    isEdit ? formLabels.placeholders.endtime : ""
  );
  const [description, setDescription] = useState(
    isEdit ? formLabels.placeholders.description : ""
  );
  const [location, setLocation] = useState(
    isEdit ? formLabels.placeholders.location : ""
  );
  const [date, setDate] = useState(isEdit ? formLabels.placeholders.date : "");
  const [image, setImage] = useState(
    isEdit ? formLabels.placeholders.image : ""
  );
  const [category, setCategory] = useState(
    isEdit ? formLabels.placeholders.categories : ""
  );
  const [user, setUser] = useState(isEdit ? formLabels.placeholders.user : "");

  const isEmpty =
    title === "" ||
    startTime === "" ||
    endTime === "" ||
    description === "" ||
    location === "" ||
    date === "" ||
    image === "" ||
    category === "" ||
    user === "";

  // Form data control utils ================================================================
  const toIsoFormat = (date, time) => {
    const isoFormat = date + "T" + time;
    return isoFormat;
  };

  const getNewEventId = () => {
    let maxId = 0;
    events.map((event) => {
      if (maxId < event.id) {
        maxId = event.id;
      }
    });

    return maxId + 1;
  };
  //makes categoryId array
  const addCategory = (newCategory) => {
    const categories = [newCategory];
    return categories;
  };

  const makeEventObject = () => {
    const eventObject = {
      id: getNewEventId(),
      createdBy: user,
      title: title,
      description: description,
      image: image,
      categoryIds: addCategory(category),
      location: location,
      startTime: toIsoFormat(date, startTime),
      endTime: toIsoFormat(date, endTime),
    };
    return eventObject;
  };

  const newEventActions = () => {
    const eventobject = makeEventObject();
    addEvent(eventobject);
    window.location.reload(false);
  };

  const editEventActions = () => {
    const eventobject = makeEventObject();
    console.log(eventobject);
    window.location.reload(false);
  };

  const clickSendAction = (action) => {
    switch (action) {
      case "new":
        return newEventActions();
      case "edit":
        return editEventActions();
      default:
        return newEventActions();
    }
  };

  //Form =================================================================================
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{formLabels.formTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>User</FormLabel>
              <Select
                placeholder={formLabels.placeholders.user}
                required="required"
                onChange={(e) => setUser(Number(e.target.value))}
                value={user}
              >
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Select>

              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                required="required"
                placeholder={formLabels.placeholders.title}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />

              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                required="required"
                placeholder={formLabels.placeholders.description}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />

              <FormLabel>Category</FormLabel>
              <Select
                placeholder={formLabels.placeholders.category}
                required="required"
                onChange={(e) => setCategory(Number(e.target.value))}
                value={category}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>

              <FormLabel>Image url</FormLabel>
              <Input
                type="url"
                required="required"
                placeholder={formLabels.placeholders.image}
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />

              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                required="required"
                placeholder={formLabels.placeholders.date}
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />

              <FormLabel>Start time</FormLabel>
              <Input
                type="time"
                required="required"
                placeholder={formLabels.placeholders.starttime}
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
              />

              <FormLabel>End time</FormLabel>
              <Input
                type="time"
                required="required"
                placeholder={formLabels.placeholders.endtime}
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
              />

              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                required="required"
                placeholder={formLabels.placeholders.location}
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {isEmpty ? (
              <>
                <p>Please fill in all the fields, all fields are required.</p>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    clickSendAction(formLabels.action);
                  }}
                  colorScheme="blue"
                  mr={3}
                >
                  {formLabels.buttons.sendButton}
                </Button>
              </>
            )}

            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

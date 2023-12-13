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
  Stack,
} from "@chakra-ui/react";

import { Checkbox } from "./Checkbox";

import { useState, useEffect, React } from "react";
import { useLoaderData } from "react-router-dom";
import { ToIsoFormat, CheckedCategoriesIdArray } from "./Utils";

export const loader = async () => {
  const categories = await fetch("http://localhost:3000/categories");
  const users = await fetch("http://localhost:3000/users");
  return {
    categories: await categories.json(),
    users: await users.json(),
  };
};

export const EventForm = ({ isOpen, onClose, formLabels, formActions }) => {
  const { categories, users } = useLoaderData();

  const isEdit = formLabels.action == "edit";

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
  const [date, setDate] = useState(isEdit ? formLabels.placeholders.date : ""); // date format?
  const [image, setImage] = useState(
    isEdit ? formLabels.placeholders.image : ""
  );
  const [categoryArray, setCategory] = useState(
    isEdit ? formLabels.placeholders.category : ""
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
    categoryArray === "" ||
    user === "";

  // Form data control utils ================================================================
  //checkbox control
  const [checkboxStates, setCheckboxStates] = useState(
    categories.map((category) => {
      if (isEdit) {
        const isAlreadyChecked = categoryArray.includes(category.id);
        const newObject = { ...category, checked: isAlreadyChecked };
        return newObject;
      } else {
        const newObject = { ...category, checked: false };
        return newObject;
      }
    })
  );
  const updateCheckStatus = (index) => {
    setCheckboxStates(
      checkboxStates.map((category) =>
        category.id === index
          ? { ...category, checked: !category.checked }
          : category
      )
    );
  };

  useEffect(() => {
    setCategory(CheckedCategoriesIdArray(checkboxStates));
  }, [checkboxStates]);

  //object
  const makeEventObject = () => {
    const eventObject = {
      id: isEdit ? formLabels.placeholders.id : 0,
      createdBy: user,
      title: title,
      description: description,
      image: image,
      categoryIds: categoryArray,
      location: location,
      startTime: ToIsoFormat(date, startTime),
      endTime: ToIsoFormat(date, endTime),
    };
    return eventObject;
  };
  //button click control
  const clickSendAction = () => {
    const eventObject = makeEventObject();
    formActions(eventObject);
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
                required="required"
                onChange={(e) => setUser(Number(e.target.value))}
                value={user}
                placeholder="select user"
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
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />

              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                required="required"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />

              <FormLabel>Category</FormLabel>
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                {checkboxStates.map((category) => (
                  <Checkbox
                    key={category.name}
                    checkHandler={() => {
                      updateCheckStatus(category.id);
                    }}
                    isChecked={category.checked}
                    label={category.name}
                    index={category.id}
                  />
                ))}
              </Stack>

              <FormLabel>Image url</FormLabel>
              <Input
                type="url"
                required="required"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />

              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                required="required"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />

              <FormLabel>Start time</FormLabel>
              <Input
                type="time"
                required="required"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
              />

              <FormLabel>End time</FormLabel>
              <Input
                type="time"
                required="required"
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
              />

              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                required="required"
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
                    clickSendAction();
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

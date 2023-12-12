import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";
import { React, useState } from "react";
import { deleteEvent } from "./ConnectToAPI";
import { useNavigate } from "react-router-dom";

export const DeleteEvent = (eventInfo) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const [toastParam, setToastParam] = useState({
    title: "Event deleted succesfully",
    description: "Event is permantly deleted",
    status: "success",
    duration: 3000,
    isClosable: true,
  });

  return (
    <ul>
      <Button
        onClick={() => {
          onOpen();
        }}
        colorScheme="red"
        m={3}
      >
        Delete Event
      </Button>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Event
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  deleteEvent(eventInfo.eventInfo);
                  onClose();
                  navigate(`/events`);
                  toast(toastParam);
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ul>
  );
};

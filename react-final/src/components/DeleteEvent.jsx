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
import { useNavigate } from "react-router-dom";

export const DeleteEvent = (eventInfo) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const noErrorState = { happened: false, msg: "" };
  const [error, setError] = useState(noErrorState);
  const toast = useToast();
  const succesToastParam = {
    title: "Event deleted succesfully",
    description: "Event has been deleted",
    status: "success",
    duration: 3000,
    isClosable: true,
  };

  const errorToastParam = {
    title: "Error: Event not deleted",
    description: "server error: " + error.msg,
    status: "error",
    duration: 6000,
    isClosable: true,
  };

  const deleteEventOnServer = async (deleteContent) => {
    try {
      await fetch(`http://localhost:3000/events/${deleteContent.id}`, {
        method: "DELETE",
        body: JSON.stringify(deleteContent),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
    } catch (err) {
      console.log("delete error");
      setError({
        happened: true,
        msg: err.message,
      });
      toast(errorToastParam);
    }
  };

  const deleteActions = () => {
    deleteEventOnServer(eventInfo.eventInfo);
    if (!error.happened) {
      console.log("event deleted");
      onClose();
      navigate(`/events`);
      toast(succesToastParam);
    }
  };

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
              Are you sure? You can not undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  deleteActions();
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

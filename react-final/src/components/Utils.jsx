import { useToast } from "@chakra-ui/react";

export const Toast = () => {
  console.log("teast");
  return useToast({
    title: "Account created.",
    description: "We've created your account for you.",
    status: "success",
    duration: 9000,
    isClosable: true,
  });
};

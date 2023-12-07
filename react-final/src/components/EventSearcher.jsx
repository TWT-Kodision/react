import { Center, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// import { data } from "../utils/data";
// import { RecipeList } from "./RecipeList";

export const loader = async () => {
  const events = await fetch(`http://localhost:3000/events`);

  return {
    events: await events.json(),
  };
};

export const EventSearcher = ({ setEventsList, setFilteredList }) => {
  const { events } = useLoaderData();

  const [searchField, setSearchField] = useState("");

  const matchedEvents = events.filter((event) => {
    return event.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <Center flexDir={"column"} gap={5}>
        <label>Search event title:</label>
        <Input
          onChange={(e) => {
            setSearchField(e.target.value);
          }}
          value={searchField}
          w={200}
        />
        <Button
          onClick={() => {
            setFilteredList(matchedEvents);
            setEventsList(matchedEvents);
          }}
          colorScheme="blue"
          m={3}
        >
          Search
        </Button>
      </Center>
    </>
  );
};

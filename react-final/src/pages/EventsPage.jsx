import { React, useState } from "react";
import { EventCard } from "../components/EventCard";
import { CreateEvent } from "../components/CreateEvent";
import { useLoaderData } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import { EventSearcher } from "../components/eventSearcher";
import { EventsFilter } from "../components/EventFilter";

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

export const EventsPage = () => {
  const { events, categories } = useLoaderData();
  const [eventsList, setEventsList] = useState(events);
  const [filteredList, setFilteredList] = useState(eventsList);

  return (
    <>
      <EventSearcher
        setEventsList={setEventsList}
        setFilteredList={setFilteredList}
      />
      <EventsFilter eventsList={eventsList} clickFilter={setFilteredList} />
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        {filteredList.map((event) => (
          <EventCard
            to={`event/${event.id}`}
            key={event.id}
            event={event}
            categories={categories}
          />
        ))}
        <CreateEvent />
      </SimpleGrid>
    </>
  );
};

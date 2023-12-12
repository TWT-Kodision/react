import { React } from "react";
import {
  Heading,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import { EditEvent } from "../components/EditEvent";
import { DeleteEvent } from "../components/DeleteEvent";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const categories = await fetch("http://localhost:3000/categories");
  const users = await fetch("http://localhost:3000/users");

  return {
    eventData: await event.json(),
    categories: await categories.json(),
    users: await users.json(),
  };
};

export const EventPage = () => {
  const { eventData, categories, users } = useLoaderData();
  const [event, setEvent] = useState(eventData);
  const usersAndCategories = { users: users, categories: categories };
  const user = users.filter((user) => {
    return user.id == event.createdBy;
  })[0];
  const categoryList = () => {
    const selectCategory = [];
    event.categoryIds.map((categoryId) =>
      selectCategory.push(
        categories.find((category) => categoryId == category.id).name
      )
    );
    return selectCategory.toString();
  };

  const convertDateToNormalPeopleFormat = (date) => {
    const convertedDate =
      date.slice(8, 10) + "-" + date.slice(5, 7) + "-" + date.slice(0, 4);
    return convertedDate;
  };

  const convertedDateTime = {
    starttime: event.startTime.slice(11, 16),
    endtime: event.endTime.slice(11, 16),
    date: convertDateToNormalPeopleFormat(event.startTime.slice(0, 10)),
  };

  return (
    <>
      <Card gap={8} align="center" bg={"green.200"}>
        <CardHeader size="lg">
          <Heading align="center" color="tomato" m={3}>
            {event.title}
          </Heading>
          <Image src={event.image} borderRadius="lg" boxSize="lg" />
        </CardHeader>
        <CardBody>
          <Text>Description: {event.description} </Text>
          <Text>Location: {event.location} </Text>
          <Text>Date:{convertedDateTime.date}</Text>
          <Text>Starttime: {convertedDateTime.starttime} </Text>
          <Text>Endtime: {convertedDateTime.endtime} </Text>
          <Text>Category: {categoryList()}</Text>
        </CardBody>
        <CardFooter>
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Text>Created by: {user.name}</Text>
            <Image src={user.image} borderRadius="sm" boxSize="100px" />
          </Stack>
        </CardFooter>
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {" "}
          <EditEvent
            eventCategories={categoryList()}
            user={user}
            eventInfo={event}
            dateTime={convertedDateTime}
            usersAndCategories={usersAndCategories}
            setEvent={setEvent}
          />
          <DeleteEvent eventInfo={event} />
        </Stack>
      </Card>
    </>
  );
};

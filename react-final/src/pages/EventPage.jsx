import { React, useState } from "react";
import { Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  console.log({ params });
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const categories = await fetch("http://localhost:3000/categories");
  const users = await fetch("http://localhost:3000/users");

  return {
    event: await event.json(),
    categories: await categories.json(),
    users: await users.json(),
  };
};

export const EventPage = () => {
  const { event, categories, users } = useLoaderData();

  const userObject = users.filter((user) => {
    return user.id.includes(event.createdBy);
  });

  const categoryList = () => {
    const selectCategory = [];
    event.categoryIds.map((categoryId) =>
      selectCategory.push(
        categories.find((category) => categoryId == category.id).name
      )
    );
    return selectCategory.toString();
  };

  const getUserInfo = () => {
    console.log(event.createdBy);
    users.map((user) => {
      if (user.id === event.createdBy) {
        console.log("test");
      }
    });
  };

  return (
    <>
      <Heading> {event.title}</Heading>
      <p> {categoryList()}</p>
      <p>{getUserInfo()}</p>
    </>
  );
};

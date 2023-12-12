import { useState } from "react";

export const addEvent = async (newEvent) => {
  const noErrorState = { happened: false, msg: "" };
  const [error, setError] = useState(noErrorState);

  try {
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    newEvent.id = (await response.json()).id;
    console.log("add event API");
  } catch (err) {
    setError({
      happened: true,
      msg: err.message,
    });

    return error;
  }
};

export const updateEvent = async (newContent) => {
  // No error handling, normally you would do that.
  const response = await fetch(
    `http://localhost:3000/events/${newContent.id}`,
    {
      method: "PATCH",
      body: JSON.stringify(newContent),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }
  );
  newContent.id = (await response.json()).id;
  console.log("edit event API");
};

export const deleteEvent = async (deleteContent) => {
  // No error handling, normally you would do that.
  const response = await fetch(
    `http://localhost:3000/events/${deleteContent.id}`,
    {
      method: "DELETE",
      body: JSON.stringify(deleteContent),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }
  );
  deleteContent.id = (await response.json()).id;
  console.log("delete event API");
};

// const fetchUserPosts = async () => {
//   let response;

//   try {
//     response = await flakyFetch(`http://localhost:3000/users/${user.id}/posts`);
//   } catch (err) {
//     setError({
//       happened: true,
//       msg: err.message,
//     });
//     // We can't do anything useful in this function after an error happens.
//     setIsLoading(false);
//     return;
//   }

//   if (ignore) {
//     // We don't need to do anything.
//     return;
//   }

//   if (!response.ok) {
//     setError({
//       happened: true,
//       msg: `${response.status}: ${response.statusText}`,
//     });
//     setIsLoading(false);
//     return;
//   }

//   const posts = await response.json();
//   setPosts(posts);
//   setIsLoading(false);
// };

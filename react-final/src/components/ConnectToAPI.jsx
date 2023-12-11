export const addEvent = async (newEvent) => {
  // No error handling, normally you would do that.
  const response = await fetch("http://localhost:3000/events", {
    method: "POST",
    body: JSON.stringify(newEvent),
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });
  newEvent.id = (await response.json()).id;
  console.log("add event API");
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

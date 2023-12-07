export const addEvent = async (newEvent) => {
  // No error handling, normally you would do that.
  const response = await fetch("http://localhost:3000/events", {
    method: "POST",
    body: JSON.stringify(newEvent),
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });
  newEvent.id = (await response.json()).id;
  console.log("addEvent API");
};

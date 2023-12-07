import { Stack, Center, Button } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

export const loader = async () => {
  const categories = await fetch("http://localhost:3000/categories");
  return {
    categories: await categories.json(),
  };
};

export const EventsFilter = ({ eventsList, clickFilter }) => {
  const { categories } = useLoaderData();
  const [checkboxStates, setCheckboxStates] = useState(
    categories.map((category) => {
      const newObject = { ...category, checked: true };
      return newObject;
    })
  );

  // checks and updates checkbox
  const updateCheckStatus = (index) => {
    setCheckboxStates(
      checkboxStates.map((category) =>
        category.id === index
          ? { ...category, checked: !category.checked }
          : category
      )
    );
  };

  //creates array with the category ids which are checked
  const arrayCheckedCategoriesId = () =>
    checkboxStates.map((category) =>
      category.checked ? category.id : undefined
    );

  //looks if the checked category ids contains in the event category.
  const matchedEvents = () => {
    const checkedCategories = arrayCheckedCategoriesId();
    const isChecked = [
      eventsList.map((event) => {
        if (event.categoryIds.some((r) => checkedCategories.includes(r))) {
          return event;
        }
      }),
    ];
    return isChecked[0];
  };

  // cleans array from undefined
  const cleanArray = (array) => {
    const cleanArray = array.filter(function (element) {
      return element !== undefined;
    });
    return cleanArray;
  };

  return (
    <>
      <Center>
        <label>filter by category: </label>
      </Center>

      <Center>
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {checkboxStates.map((category) => (
            <Checkbox
              key={category.name}
              checkHandler={() => {
                updateCheckStatus(category.id);
              }}
              isChecked={category.checked}
              label={category.name}
              index={category.id}
            />
          ))}
        </Stack>
        <Button
          onClick={() => {
            console.log("click filter");
            clickFilter(cleanArray(matchedEvents()));
          }}
          colorScheme="blue"
          m={3}
        >
          Filter
        </Button>
      </Center>
    </>
  );
};

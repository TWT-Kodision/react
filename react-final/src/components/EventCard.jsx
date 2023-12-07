import { Image, Text, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const EventCard = ({ event, categories }) => {
  // filter categories using categoryIds in event
  const categoryList = () => {
    const selectCategory = [];
    event.categoryIds.map((categoryId) =>
      selectCategory.push(
        categories.find((category) => categoryId == category.id).name
      )
    );

    return selectCategory.toString();
  };

  // navigate using onClick
  const navigate = useNavigate();

  const convertDateToNormalPeopleFormat = (date) => {
    const convertedDate =
      date.slice(8, 10) + "-" + date.slice(5, 7) + "-" + date.slice(0, 4);
    return convertedDate;
  };

  return (
    <ul>
      <Card
        gap={8}
        align="center"
        cursor={"pointer"}
        bg={"green.200"}
        onClick={() => {
          navigate(`/event/${event.id}`);
        }}
      >
        <CardHeader size="md">
          <Text align="center" fontSize="2xl" color="tomato">
            {event.title}
          </Text>
          <Image src={event.image} borderRadius="lg" boxSize="md" />
        </CardHeader>
        <CardBody>
          <Text>{event.description} </Text>
          <Text>{event.location} </Text>
          <Text>
            date:{" "}
            {convertDateToNormalPeopleFormat(event.startTime.slice(0, 10))}{" "}
          </Text>
          <Text>starttime: {event.startTime.slice(11, 16)} </Text>
          <Text>endtime: {event.endTime.slice(11, 16)} </Text>
          <Text>category: {categoryList()}</Text>
        </CardBody>
      </Card>
    </ul>
  );
};

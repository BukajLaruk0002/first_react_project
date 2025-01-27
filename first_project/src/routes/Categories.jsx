import { Text, Flex, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

const Categories = () => {
  const { data, error, isLoading } = useSWR("/products/categories");

  console.log(data);

  return (
    <Flex justifySelf={"center"} gap={5}>
      {isLoading && <Spinner size="xl" />}
      {error && (
        <Text fontSize="7xl" color="red">
          {"Error"}
        </Text>
      )}
      {data?.map((category) => (
        <Text boxSizing="border-box" borderStyle="inset" key={category}>
          {category}
        </Text>
      ))}
    </Flex>
  );
};

export default Categories;

import { Text, Flex, Spinner } from "@chakra-ui/react";
import { Link } from "react-router";
import useSWR from "swr";

const Categories = () => {
  const { data, error, isLoading } = useSWR("/products/categories");

  console.log(data);

  return (
    <Flex justifySelf={"center"} gap={5}>
      {isLoading && <Spinner size="xl" />}
      {error && <Text color="red">{"Error"}</Text>}
      {data?.map((category) => (
        <Link key={category} to={`/categories/${category}`}>
          <Text
            //zrobic style na chakrze
            border="6px"
            borderStyle="inset"
            borderColor={"blue.400"}
            flexWrap="wrap"
            cursor={"pointer"}
          >
            {category}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};

export default Categories;

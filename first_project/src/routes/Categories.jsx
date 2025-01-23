import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories").then((res) => {
      res.json().then((data) => setCategories(data));
    });
  }, []);

  return (
    <Flex gap={5} flexDir={"column"}>
      {categories.map((category) => (
        <Text key={category}>{category}</Text>
      ))}
    </Flex>
  );
};
export default Categories;

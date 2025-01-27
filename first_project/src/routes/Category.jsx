import {
  Center,
  Flex,
  Text,
  Spinner,
  Card,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import useSWR from "swr";
const Category = () => {
  const { category } = useParams();
  const { data, error, isLoading } = useSWR(`/products/category/${category}`);
  return (
    <Flex alignContent="center" flexDir="column" justifyContent={"center"}>
      <Center>
        {isLoading && <Spinner size="xl" />}
        {error && <Text color="red">{"Error"}</Text>}
        <SimpleGrid columns="2" gap={8}>
          {data?.map((product) => (
            <Card.Root maxW="sm" overflow="hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                objectFit={"contain"}
                padding={2}
              />
              <Card.Body gap="2">
                <Card.Title key={product.id}>{product.title}</Card.Title>
                <Card.Description>pepekpepunio</Card.Description>
                <Text
                  textStyle="2xl"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                >
                  {product.price}$
                </Text>
              </Card.Body>
              <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
              </Card.Footer>
            </Card.Root>
            // <Text key={product.id}> {product.title}</Text>
          ))}
        </SimpleGrid>
      </Center>
    </Flex>
  );
};
export default Category;

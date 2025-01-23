import { Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router";
import Logo from "./Logo";
 

const Navbar = () => {
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      height="70px"
      position="fixed"
      backgroundColor="blue.400"
      shadow="md"
    >
      <Logo />
      <NavLink 
        to="/categories" 
        className={({ isActive }) => (isActive ? "red" : "white")} 
        end
      >
        <Text 
          size="xl" 
          fontWeight="bold" 
          mr={10} 
          cursor="pointer" 
          _hover={{ color: "blue.300", }}
          transition={"all ease-in-out 0,3s"}
        >
          Categories
        </Text>
      </NavLink>
    </Flex>
  );
};

export default Navbar;
import { Flex, Text, Icon } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import Navbar from "./navbar"; 
const Logo = () => {
    return (
    <Flex 
            marginLeft={10}
            alignItems={"center"}
            gap={2} 
            shadow="xl"
            padding={1}
            rounded={"xl"}>

            <Icon w={6} h={6} as={ShoppingCart}/>

                <ShoppingCart />

            <Text
                marginLeft={10}
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={"white"}>
            Fake Store
            </Text> 
    </Flex>
)}
/* eslint-disable react/prop-types */
import { Flex, Box } from "@chakra-ui/react";

import Navbar from "./navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = ({ children }) => {
  return (
    <Flex height={"100vh"} flexDirection={"column"}>
      <Navbar />
      <Box
        flex={1}
        width={"100%"}
        backgroundColor={"white"}
        color="black"
        marginTop={"70px"}
        padding={5}
      >
        <Outlet/>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;

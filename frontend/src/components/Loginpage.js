import React from "react";

import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import Navbar from "./Navbar";

const Loginpage = () => {
  return (
    <>
      <Navbar />
      <Container
        maxW="xl"
        bg="../image/backgroundforLogin.jpg"
        bgRepeat="no-repeat"
        bgSize="cover"
        centerContent
      >
        <Box
          d="flex"
          textAlign="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans" color="black">
            Login to your account and stay connected
          </Text>
        </Box>

        <Box
          bg="white"
          w="100%"
          p={4}
          color="black"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Tabs variant="soft-rounded">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default Loginpage;

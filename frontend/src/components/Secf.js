import React from "react";
import Navbar from "./Navbar";
// import { MDBChart, MDBCol } from "mdb-react-ui-kit";
// import { MDBTypography } from "mdb-react-ui-kit";
// import { Bar } from "react-chartjs-2";
import { Flex, Box, Text } from "@chakra-ui/react";

function Secf() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Flex>
          <Box w="30%" p={2}>
            <Text fontWeight="bold">Animals</Text>
          </Box>
          <Box w="70%" p={2}>
            <Flex>
              <Box w="50%" p={2}>
                <Text fontWeight="bold">Mammals</Text>
              </Box>
              <Box w="50%" p={2}>
                <Text fontWeight="bold">Birds</Text>
              </Box>
            </Flex>
          </Box>
          <Box w="30%" p={2}>
            <Flex>
              <Box w="50%" p={2}>
                <Text>Bears</Text>
              </Box>
              <Box w="50%" p={2}>
                <Text>Lions</Text>
              </Box>
            </Flex>
          </Box>
          <Box w="70%" p={2}>
            <Flex>
              <Box w="50%" p={2}>
                <Text>Owls</Text>
              </Box>
              <Box w="50%" p={2}>
                <Text>Eagles</Text>
              </Box>
            </Flex>
          </Box>
          <Box w="30%" p={2}>
            <Text fontWeight="bold">Plants</Text>
          </Box>
          <Box w="70%" p={2}>
            <Flex>
              <Box w="50%" p={2}>
                <Text fontWeight="bold">Trees</Text>
              </Box>
              <Box w="50%" p={2}>
                <Text fontWeight="bold">Flowers</Text>
              </Box>
            </Flex>
          </Box>
          <Box w="30%" p={2}>
            <Flex>
              <Box w="50%" p={2}>
                <Text>Coniferous</Text>
              </Box>
              <Box w="50%" p={2}>
                <Text>Deciduous</Text>
              </Box>
            </Flex>
          </Box>
          <Box w="70%" p={2}>
            <Flex>
              <Box w="50%" p={2}>
                <Text>Roses</Text>
              </Box>
              <Box w="50%" p={2}>
                <Text>Tulips</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </div>
    </>
  );
}

export default Secf;

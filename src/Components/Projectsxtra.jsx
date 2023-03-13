

import React from 'react'
import "../CSS/Projects.css"
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
const Githubxtra = () => {
  return (
    <Flex w={"100%"} backgroundColor=  "#2a2f4c"
    color="white" mt={10}>

    <Flex id="extra" direction={['column', "row"]} justifyContent='space-between' alignItems='center' ml={2} >

        <Heading textAlign={'left'}  textDecoration="underline" textDecorationColor="#f6324b" >Projects</Heading>
      
    </Flex>

      </Flex>
  )
}

export default Githubxtra
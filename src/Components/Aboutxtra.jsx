import React from 'react'
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import '../CSS/Navbar.css'
import { DownloadIcon } from '@chakra-ui/icons'
import Resume from '../PDF/Gourav_Bundiwal_Resume.pdf'
import "../CSS/About.css";
const Aboutxtra = () => {
  return (
    <Flex w={"100%"} backgroundColor=  "#2a2f4c"
    color="white">

    <Flex id="extra" direction={['column', "row"]} justifyContent='space-between' alignItems='center' ml={2} >

        <Heading textAlign={'left'}  textDecoration="underline" textDecorationColor="#f6324b" >About Me</Heading>
        <a className="nav-link resume" href={Resume} onClick={() => window.open("https://drive.google.com/file/d/1SwaqlQIIfabg-mgmSySgWnfEmDxgkRz5/view?usp=sharing")} download="Gourav_Bundiwal_Resume">
                        <Button className="margin-class"  id="resume-button-2" bg={"#f6324b"}>
                            <DownloadIcon /> Resume
                        </Button>
                    </a>
    </Flex>

      </Flex>
  )
}

export default Aboutxtra
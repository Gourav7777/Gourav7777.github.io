import React from "react";
import { Flex,Text,Button, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import Gourav_Bundiwal_Resume from "../PDF/Gourav_Bundiwal_Resume.pdf";
const Navbar = () => {
   const handleClick = () => {
   window.open(Gourav_Bundiwal_Resume, "_blank", "noreferrer");
  
 };
  return (
    <Flex
      backgroundColor="#2a2f4c"
      p={3}
      w={"100%"}
      color="white"
      justifyContent='space-between'
    >
      <Flex  alignItems={"center"} cursor={"pointer"}>
        <Heading  ml="8" size="md" fontWeight='semibold' >Gourav</Heading>
      </Flex>
      
      
    <Flex  gap={5} fontWeight='semibold'alignItems={"center"} cursor={"pointer"} mr={8}>
        <Text>Home</Text>
        <Text>About Me</Text>
        <Text>Skills</Text>
        <Text>Project</Text>
        <Text>Contact</Text>
        <Button bg={"#f6324b"}><DownloadIcon />Resume</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;


//   return (
//     <Box
//       bg={"#2a2f4c"}
//       position="sticky"
//       top="0"
//       zIndex="100"
//       boxShadow="rgba(61, 61, 148, 0.25) 0px 6px 12px -2px, rgba(34, 30, 30, 0.3) 0px 3px 7px -3px"
//     >
//       <Flex alignItems="center" justifyContent={"space-between"}>
//         <Link to="Home" spy={true} smooth={true} offset={-40} duration={500}>
//           Gourav
//         </Link>{" "}
//         <HStack pr={10} spacing={[6, 8, 10, 12]} fontSize="20px">
//           <Box cursor={"pointer"}>
//             <Link
//               to="Home"
//               spy={true}
//               smooth={true}
//               offset={-40}
//               duration={500}
//               textDecoration="none"
//             >
//               Home
//             </Link>
//           </Box>{" "}
//           <Box cursor={"pointer"}>
//             <Link
//               to="About"
//               spy={true}
//               smooth={true}
//               offset={-40}
//               duration={500}
//               textDecoration="none"
//             >
//               About
//             </Link>
//           </Box>
//           <Box cursor={"pointer"}>
//             <Link
//               to="Skills"
//               spy={true}
//               smooth={true}
//               offset={-40}
//               duration={500}
//               textDecoration="none"
//             >
//               Skills
//             </Link>
//           </Box>
//           <Box cursor={"pointer"}>
//             <Link
//               to="Projects"
//               spy={true}
//               smooth={true}
//               offset={-40}
//               duration={500}
//               textDecoration="none"
//               cu
//             >
//               Project
//             </Link>
//           </Box>
//           <Box cursor={"pointer"}>
//             <Link
//               to="Contact"
//               spy={true}
//               smooth={true}
//               offset={-40}
//               duration={500}
//               textDecoration="none"
//             >
//               Contact
//             </Link>
//           </Box>
//           <Box cursor={"pointer"}>
//             <a href={Gourav_Bundiwal_Resume} download>
//               <Button onClick={handleClick} bg={"#f6324b"}>
//                 Resume
//               </Button>
//             </a>
//           </Box>
//         </HStack>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;

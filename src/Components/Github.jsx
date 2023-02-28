import { Card, Heading, SimpleGrid,Flex } from "@chakra-ui/react";
import  '../CSS/Github.css'

import GitHubCalendar from 'react-github-calendar';
function Github() {
   

    return (
        <section style={{
            width: "100%",
            backgroundColor:  "#2a2f4c",
            color:"white",
            
            padding: "20px",
            
          }}>
        <div className="github">
           
            <SimpleGrid columns={[1, 2]} gap='20px' p='30px'>
                <img id="github-streak-stats" align='center' src="https://github-readme-streak-stats.herokuapp.com?user=gourav7777&theme=violet-punch" alt="gourav7777" />
                <img id="github-stats-card" align='center' src="https://github-readme-stats.vercel.app/api?username=gourav7777&show_icons=true&theme=violet-punch" alt="gourav7777" />

            </SimpleGrid>

            <Flex style={{ alignSelf: "center",margin:"auto" ,   }} justifyContent="center"  >
                <img id="github-top-langs" align='center' src="https://github-readme-stats.vercel.app/api/top-langs/?username=gourav7777&theme=violet-punch&layout=compact" alt="gourav7777" />
            </Flex>

            <Card m='20px' p='20px' backgroundColor={'#000000'} 
            // color="#3934dc"
            color="white"
            >
                <Flex className="react-activity-calendar"  >
                 
                <GitHubCalendar 
         className="react-activity-calendar"
          username="code0403" 
          blockSize={17} 
          hideTotalCount
          fontSize={16}
        //   color="#7a43fe"
        //   color="#525568"
        color="green"

          blockRadius={3}
          backgroundColor={'#000000'}
           />
                </Flex>
            </Card>
        </div >
        </section>
    )
}

export default Github;
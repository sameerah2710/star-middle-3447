import React from "react";
import {Link , NavLink} from "react-router-dom"
import { Heading, Box, Text, color } from "@chakra-ui/react";
import { ArrowDownIcon} from '@chakra-ui/icons'
import styles from "./Series.module.css";
import Blogs from "../Pages/Live_Scores/Blogs";
import SeriesBlogs from "./SeriesBlog";
import SeriesBlog from "./SeriesBlog";
import Navbar from "./HomePage/Navbar/navbar";
import Footers from "./HomePage/footersecond/footers";

const Series = () => {
  return (
    <div className={styles.container}>
      <Navbar/>

      <Heading as="h2" size="md" noOfLines={1} className={styles.heading}>
        FIXTURES AND RESULTS
      </Heading>
      
      <Box className={styles.outerbox}>
      <img src="https://tpc.googlesyndication.com/daca_images/simgad/532420073875604930"  style={{paddingLeft:"125px" , paddingTop:"20px"}}/>
        <img style={{marginLeft:"78%" , width:"20%", marginTop:"20px" ,}} src="https://tpc.googlesyndication.com/simgad/10028855014806727821?" alt="" />
        <div className={styles.blogbox}>
          <img src="https://tpc.googlesyndication.com/simgad/11639078905771269026?" />
          
          
          <SeriesBlog />
          
        </div>
        <img style={{marginLeft:"78%" , width:"20%", marginTop:"20px" ,}} src="https://tpc.googlesyndication.com/simgad/7878157276616870270?" />
        <Box className={styles.heading2} style={{marginTop:"-920px"}}>
        
          <Text fontSize="md"><NavLink to="/Series" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Current Cricket</NavLink></Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md" > <NavLink to="/future_matches" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Future Series / Tournaments</NavLink> </Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md"> <NavLink to="/recently" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Recently Concluded</NavLink></Text>
        </Box>
        {/* <hr style={{ backgroundColor: "black" , width:"auto"}}  /> */}
        <Box className={styles.content} >
          <Box>
            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px"}}>INTERNATIONAL TOURS</Text>
            <div style={{lineHeight:"10px"}}>
            <h5><NavLink to="/Series_singlematch">England v South Africa</NavLink> </h5>
            <h5>Zimbabwe v India</h5>
            <h5>West Indies v New Zealand</h5>
            <h5>Netherlands v Pakistan</h5>
            <h5>Australia v Zimbabwe</h5>
            <h5>BAN-A in West Indies</h5>
            <h5>SL U-19s in ENG</h5>
            <h5>IRE-W in NL</h5>
            </div>
            

            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>INTERNATIONAL TOURNAMENTS</Text>
            <div style={{lineHeight:"10px"}}>
            <h5>Asia Cup Qualifier</h5>
            <h5>Asia Cup 2022</h5>
            <h5>CWC Challenge Group A</h5>
            <h5>CWC Challenge Group B</h5>
            
            </div>
            <ArrowDownIcon style={{marginTop:"1100px"}} />
          </Box>
          <Box className={styles.vertical}></Box>
          <Box style={{marginLeft:"-90px"}}>
            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px"}}>ICC TOURNAMENTS</Text>
            <div style={{lineHeight:"10px"}}>
            <h5>ICC Women's Championship</h5>
            <h5>Men's Cricket World Cup League 2</h5>
            <h5>CWC Challenge League Group A</h5>
            <h5>CWC Challenge League Group B</h5>
            <h5>ICC CWC Super League</h5>
            <h5>ICC World Test Championship</h5>
            </div>

            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>T20/T10 TOURNAMENTS</Text>
            <div style={{lineHeight:"15px"}}>
            <h5>Asia Cup 2022</h5>
            <h5>SLC T20</h5>
            <h5>Maharaja T20</h5>
            <h5>6IXTY (W)</h5>
            <h5>6IXTY (M)</h5>
            <h5>T20 QUAD (in UAE)</h5>
            <h5>Namibia T20</h5>
            </div>

            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>ASSOCIATE CRICKET</Text>
            <div style={{lineHeight:"10px"}}>
            <h5>Kenya v Nepal</h5>
            <h5>Bahrain v Kuwait</h5>
            <h5>ITA-W in Austria</h5>
            <h5>Continental Cup</h5>
            
            </div>
            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>AUSTRALIA DOMESTIC</Text>
            <div style={{lineHeight:"10px"}}>
            <h5>Sheffield Shield</h5>
            <h5>The Marsh Cup</h5>
            <h5>BBL 2022</h5>
            <h5>WBBL 2022</h5>
            <h5>WNC League</h5>
            
            </div>
            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>ENGLAND DOMESTIC</Text>
            <div style={{lineHeight:"10px"}}>
            <h5>County Div1</h5>
            <h5>County Div2</h5>
            <h5>100 (Men's)</h5>
            <h5>100 (Women's)</h5>
            <h5>RL Cup</h5>
            <h5>Vitality Blast</h5>
            <h5>RHF Cup</h5>
            
            </div>
            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>NEW ZEALAND DOMESTIC</Text>
            <div style={{lineHeight:"10px"}}>
            <h5>Plunket Shield</h5>
            <h5>Ford Trophy</h5>
            <h5>Women's 1-Day</h5>
            
            
            </div>
            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>WEST INDIES DOMESTIC</Text>
            <div style={{lineHeight:"10px"}}>
            <h5>6IXTY (W)</h5>
            <h5>6IXTY (M)</h5>
            <h5>CPL 2022</h5>
            <h5>WCPL 2022</h5>
            
            
            </div>
            
          </Box>
          
        </Box>
        
      </Box>
      <Footers/>
    </div>
  );
};

export default Series;

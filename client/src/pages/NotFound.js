import {Box, Typography} from "@mui/material";
import Nav from "../components/UI/nav/nav.js";
const Main = (props) => {
    
    return(
        <Box sx={{width:"100vw", height:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:5, mt:10}}>
                <Box sx={{p:5, mt:10, backgroundColor:"#222", borderRadius:3}}>
                    <Typography component="h1">
                        Page not found
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Main;
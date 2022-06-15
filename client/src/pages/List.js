import { useContext } from "react";
import {Box, Grid, Typography} from "@mui/material";
import Nav from "../components/UI/nav/nav.js";

const List = (props) => {

    // for (const node of ctxNations.canvasNodes) {
    //     if (node.city) {
    //         console.log(node.city);
    //     }
    // }
    
    function render() {
        // if (ctxNations.nationsProvider[0] != null) {
        //     return (ctxNations.nationsProvider.map((city,index) => {
        //         return (
        //             <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={index} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
        //                 <Grid item>City: {city.name}</Grid><Grid item> Population: {city.population.total}</Grid><Grid item> Buildings: {city.buildings.total}</Grid><Grid item> Army: {city.army.report()}</Grid>
        //             </Grid> 
        //         )
        //     }))
        // }
        return (
            <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={0} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
                <Grid item>No city yet.</Grid>
            </Grid> 
        )
    }

    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:2}}>
                <Typography variant="h3" sx={{pb:2}}>
                    List of cities down here:
                </Typography>
                <Grid container sx={{p:2}} justifyContent="center" direction='column'>
                    {render()}
                </Grid>
            </Box>
        </Box>
    )
}

export default List;


import { useContext } from "react";
import {Box, Grid, Typography} from "@mui/material";
import Nav from "../components/UI/nav/nav.js";
import ListData from "../context/listData.js";

const List = (props) => {
    const ctxLoading = useContext(ListData);

    function render() {
        if (ctxLoading.loadedCities) {
            const newData = ctxLoading.loadedCities.city.map((city, index) => {
                return (
                    <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={index} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
                        <Grid item>Cidade: {city.name}</Grid><Grid item> Coordenada X: {city.coordinate_x}</Grid><Grid item> Coordenada Y: {city.coordinate_y}</Grid>
                    </Grid> 
                )
            })
            return newData;
        }
        return (
            <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={0} sx={{p:2, mt:2, borderRadius:4, backgroundColor:"#000"}}>
                <Grid item>No city yet.</Grid>
            </Grid> 
        )
    }
    
    return (
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:2}}>
                <Typography variant="h3" sx={{pb:2}}>
                    List of cities down here:
                </Typography>
                <Grid container sx={{p:2}} justifyContent="center" direction='column'>
                    {ctxLoading.loading && !ctxLoading.loadedCities[0] != null ? <Typography>Fetching new data...</Typography> : render()}
                </Grid>
            </Box>
        </Box>
    )
}

export default List;


import { useContext, useState, useEffect } from "react";
import {Box, Grid, Typography} from "@mui/material";
import Nav from "../components/UI/nav/nav.js";

const getUrl = 'server/all';

const List = (props) => {
    const [loadedCities, setLoadedCities] = useState([]);
    const [loading, setLoadingCities] = useState(true);
   

    function fetchData() {
        fetch(getUrl)
        .then(res => res.json())
        .then(parsedData => {
            props.logData.push({text:`Data retrieved from: ${getUrl}`, time: `${new Date().toLocaleString()}.`})
            setLoadedCities(parsedData);
            
            //Important: tells the log that the job was done, and trigger the useeffect
            setLoadingCities(false);
        })
        .catch(err => err)
    }

    useEffect( () => {
        const identifier = setTimeout( () => {
            fetchData()
        return () => {
            clearTimeout(identifier);
        };
      })
    },[loading])


    function render() {
        console.log("this",loadedCities)
        if (loadedCities) {
            return (loadedCities.city.map((city,index) => {
                return (
                    <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={index} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
                        <Grid item>Cidade: {city.name}</Grid><Grid item> Coordenada X: {city.coordinate_x}</Grid><Grid item> Coordenada Y: {city.coordinate_y}</Grid>
                    </Grid> 
                )
            }))
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
                    {loading ? <Typography>Fetching data...</Typography> : render()}
                </Grid>
            </Box>
        </Box>
    )
}

export default List;


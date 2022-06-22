import { useContext, useState, useEffect } from "react";
import {Box, Grid, Typography} from "@mui/material";
import Nav from "../components/UI/nav/nav.js";
import ListData from "../context/listData.js";
import Button from '@mui/material/Button';

const List = (props) => {
    const ctxLoading = useContext(ListData);
    const [delet, setDelet] = useState(false); // used to re-render after deletion

    function deletHandler(eventObj) {
        console.log(eventObj.id);
        fetch('server/del', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id:eventObj.id})
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                console.log(data.city);
                // Remove from the context array delete data
                ctxLoading.loadedCities.city.splice(ctxLoading.loadedCities.city.findIndex((city) => {
                    return city.id === eventObj.id;
                }), 1);

                // Re-render
                setDelet(!delet);
            }
        })
    }

    function render() {
        if (ctxLoading.loadedCities.city[0] != null) {
            const newData = ctxLoading.loadedCities.city.map((city, index) => {
                return (
                    <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={index} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
                        <Grid item>Cidade: {city.name}</Grid><Grid item> Coordenada X: {city.coordinate_x}</Grid><Grid item> Coordenada Y: {city.coordinate_y}</Grid><Grid item><Button onClick={() => deletHandler({index:index,id:city.id})}>Delete</Button></Grid>
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
    
    // only used to re-render after deletion
    useEffect( () => {
        const identifier = setTimeout( () => {
        return () => {
            clearTimeout(identifier);
        };
      })
    },[delet])

    useEffect( () => {
        const identifier = setTimeout( () => {
        return () => {
            clearTimeout(identifier);
        };
      })
    },[ctxLoading.loading, ctxLoading.loadedCities])

    return (
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:2}}>
                <Typography variant="h3" sx={{pb:2}}>
                    List of cities down here:
                </Typography>
                <Grid container sx={{p:2}} justifyContent="center" direction='column'>
                    {ctxLoading.loading && !ctxLoading.loadedCities?.city != null ? <Typography>Fetching new data...</Typography> : render()}
                </Grid>
            </Box>
        </Box>
    )
}

export default List;


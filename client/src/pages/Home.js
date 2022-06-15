import { useContext, useEffect, useRef, useState } from "react";
import {Box, Typography, Grid, Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import Nav from "../components/UI/nav/nav.js";
import { FormControl, TextField } from "@mui/material";
import City from '../models/city.js';


const postUrl = 'server/add';
const getUrl = 'server/all';


const Home = (props) => {
    const [loadedCities, setLoadedCities] = useState();
    const cityNameRef = useRef();
    const xCoordsRef= useRef();
    const yCoordsRef = useRef();
    // get the data from input of city
    function submitCity(event) {
        event.preventDefault();
        //for (const x of [...Array(100).keys()]) {
            // const city = new City(cityRef.current.value);
            // city.createArmy();
            // ctxNations.nationsCurrentHandler([...ctxNations.nationsProvider,city]); // push the new city
            // cityRef.current.value = '';
            // drawOn(ctxNations.canvasNodes, canvasRef, city);
        //}
        const city = new City(cityNameRef.current.value,  xCoordsRef.current.value,  xCoordsRef.current.value)
        fetch(getUrl)
        .then(res => res.json())
        .then(parsedData => setLoadedCities(parsedData))
        .catch(err => err)
        city.print();
        cityNameRef.current.value = '';
        xCoordsRef.current.value = '';
        yCoordsRef.current.value = '';
    }
    
    function log() {
        return (
            <Typography>Data sent to: </Typography>
        )
    }

    // used for the canvas draw and for each time the page goes to another one
    // Careful here, the marches are also drawn.
    useEffect( () => {
        const identifier = setTimeout( () => {
        console.log(loadedCities);
        return () => {
            clearTimeout(identifier);
        };
      })
    },[loadedCities])
  
    //mt2
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:5}, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Grid container direction="row" sx={{backgroundColor:"#222",minHeight:"70vh", borderRadius:{xs:0, lg:3}, p:3 }}>
                    <Grid container item xs={12} lg={9}>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography variant="span">Adicionar Cidade</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column"  item xs={12} sx={{p: {xs:2, lg:2}}}>
                            <FormControl component="form" sx={{height:"100%",width:"100%",display:"flex",justifyContent:'space-between'}} onSubmit={submitCity}>
                                <Grid item display='flex' flexDirection='column'> 
                                    <Grid item p={3} xs={12}>
                                            <TextField
                                                fullWidth
                                                id="inpuy-field-city"
                                                inputRef={cityNameRef}
                                                label="Nome da Cidade"
                                                placeholder="Digite o nome da cidade"
                                                InputLabelProps={{
                                                    sx: { color: '#fff'}
                                                }}
                                                sx={{
                                                    '& input':{
                                                        WebkitBoxShadow: "0 0 0 1000px #222222 inset",
                                                        WebkitTextFillColor:'#fff'
                                                    },
                                                    '& fieldset': {
                                                        borderColor: 'white'
                                                    }
                                                }}
                                            />
                                    </Grid>
                                    <Grid item container>
                                        <Grid item p={3} xs={12} lg={6}>
                                            <TextField
                                                fullWidth
                                                id="inpuy-field-city"
                                                inputRef={xCoordsRef}
                                                label="Coordenada X"
                                                placeholder="Digite a Coordenada X"
                                                InputLabelProps={{
                                                    sx: { color: '#fff'}
                                                }}
                                                sx={{
                                                    '& input':{
                                                        WebkitBoxShadow: "0 0 0 1000px #222222 inset",
                                                        WebkitTextFillColor:'#fff'
                                                    },
                                                    '& fieldset': {
                                                        borderColor: 'white'
                                                    }
                                                }}
                                            />                                                                
                                        </Grid>
                                        <Grid item p={3} xs={12} lg={6}>
                                                <TextField
                                                    fullWidth
                                                    id="inpuy-field-city"
                                                    inputRef={yCoordsRef}
                                                    label="Coordenada Y"
                                                    placeholder="Digite a Coordenada Y"
                                                    //inputProps={{ style: {WebkitBoxShadow: "0 0 0 1000px black inset"} }}
                                                    InputLabelProps={{
                                                        sx: { color: '#fff'}
                                                    }}
                                                    sx={{
                                                        '& input':{
                                                            WebkitBoxShadow: "0 0 0 1000px #222222 inset",
                                                            WebkitTextFillColor:'#fff'
                                                        }, 
                                                        '& fieldset': {
                                                            borderColor: 'white'
                                                        
                                                        }
                                                    }}
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display='flex' flexDirection='column'>
                                    <Typography variant="span">Todos os dados conferidos?</Typography>
                                    <Button sx={{mt:2}} type="submit">Sim, Adicionar!</Button>
                                </Grid>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} lg={3} direction='row' pb={2}>
                        <Grid item xs={12}>
                            <Typography variant="span">Log Requests</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{backgroundColor:'#444',borderRadius:1,height:"100%",minHeight:"100px"}}>
                           {log()}
                        </Grid>   
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;
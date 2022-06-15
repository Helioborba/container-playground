import { useContext, useEffect, useRef } from "react";
import {Box, Typography, Grid, Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import Nav from "../components/UI/nav/nav.js";
import { FormControl, TextField } from "@mui/material";


const Home = (props) => {
    const cityRef = useRef();
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
    }
    
    // used for the canvas draw and for each time the page goes to another one
    // Careful here, the marches are also drawn.
    useEffect( () => {
        const identifier = setTimeout( () => {
            
        return () => {
            clearTimeout(identifier);
        };
      })
    },[])
  
    //mt2
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:5}, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Grid container direction="row" sx={{backgroundColor:"#222", borderRadius:{xs:0, lg:3}, p:3 }}>
                    <Grid container item xs={12} lg={9}>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography variant="span">Adicionar Cidade</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" item xs={12} sx={{p: {xs:2, lg:2}}}>
                            <FormControl component="form" onSubmit={submitCity}>
                                <Grid item display='flex' flexDirection='column'> 
                                    <Grid item p={3} xs={12}>
                                            <TextField
                                                fullWidth
                                                id="inpuy-field-city"
                                                inputRef={cityRef}
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
                                        <Grid item p={3} xs={6}>
                                            <TextField
                                                fullWidth
                                                id="inpuy-field-city"
                                                inputRef={cityRef}
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
                                        <Grid item p={3} xs={6}>
                                                <TextField
                                                    fullWidth
                                                    id="inpuy-field-city"
                                                    inputRef={cityRef}
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
                            {/* <Typography variant="span"> 172.20.0.1 - - [14/Jun/2022:22:49:43 +0000] "GET /e32a49ad1cb761c1ac33.hot-update.json HTTP/1.1" 200 46 "http://localhost:3000/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:49:43 +0000] "GET /main.e32a49ad1cb761c1ac33.hot-update.js HTTP/1.1" 200 2880 "http://localhost:3000/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /manifest.json HTTP/1.1" 304 0 "http://localhost:3000/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /static/js/bundle.js.map HTTP/1.1" 200 7794 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /static/js/main.chunk.js.map HTTP/1.1" 200 5538 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /main.78df53f189774e9a6d61.hot-update.js.map HTTP/1.1" 200 1459 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /main.884038548a3182010ab5.hot-update.js.map HTTP/1.1" 200 1430 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /main.00f4fa3e6cd9f1d7589b.hot-update.js.map HTTP/1.1" 200 1457 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /main.14901281010b19b9b705.hot-update.js.map HTTP/1.1" 200 1428 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /main.26ea30214389d3080a22.hot-update.js.map HTTP/1.1" 200 1447 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /main.b2b2c973db6af6cc0560.hot-update.js.map HTTP/1.1" 200 1408 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36" "-"
nginx_1          | 172.20.0.1 - - [14/Jun/2022:22:50:01 +0000] "GET /ma</Typography> */}
                        </Grid>   
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;
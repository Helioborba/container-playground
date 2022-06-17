import {useEffect, useState } from "react";
import {Box, Typography, Grid, Button} from "@mui/material";
import Nav from "../components/UI/nav/nav.js";
import { FormControl, TextField } from "@mui/material";
import City from '../models/city.js';



//////////////////////////////////////////////








////////////////////// ADD A REQUEST QUEUE EX : {TEXT, DATE, QUEUE NUMBER}
/////////////////////// THIS WAY WE CAN ALSO SAY : WORKING ON REQUEST QUEUEU NUMBER 123012340 FOR EXAMPLE!


///////////////////////////////////////////
// The urls for api calls
const postUrl = 'server/add';


const Home = (props) => {
    const [errorInput, setErrorInput] = useState({error:false, component:null, text:null}); // this should actually become each input, else when one is triggered, all is
    const [nameInput, setNameInput] = useState('');
    const [coordXInput, setCoordXInput] = useState('');
    const [coordYInput, setCoordYInput] = useState('');

    // Used to check if string is a number
    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

    // This function is used to clear the erros in case the user types something
    function clearError() {
        setErrorInput({error:false, component:null, text:null});
        // console.log(val)
    }

    // Form handler with clearing in case errors had occurred
    function nameHandler(event) {
        setNameInput(event.target.value);
        clearError();
    }

    function coordXHandler(event) {
        setCoordXInput(event.target.value);
        clearError();
    }

    function coordYHandler(event) {
        setCoordYInput(event.target.value);
        clearError();
    }

    function submitCity(event) {
        event.preventDefault();
        setErrorInput({error:false,component:null,text:null})

        // Checks if any data is null and raise errors; later need to check if a int is happening in the coords
        if(nameInput === '') {
            // In case city name is null
            setErrorInput({error:true, component:'name', text:'Por favor insira o nome da cidade.'})

        } else if (coordXInput === '') {
            // In case coord X is null
            setErrorInput({error:true, component:'xCoords', text:'Por favor insira a coordenada X.'})

        } else if (coordYInput === '') {
            // In case coord Y is null
            setErrorInput({error:true, component:'yCoords', text:'Por favor insira a coordenada Y.'})

        } else if (!isNumeric(coordXInput)) {
            // In case coord Y is null
            setErrorInput({error:true, component:'xCoords', text:'Por favor insira um número inteiro.'})

        } else if (!isNumeric(coordYInput)) {
            // In case coord Y is null
            setErrorInput({error:true, component:'yCoords', text:'Por favor insira um número inteiro.'})

        } else {
            // Creates the city object
            const city = new City(nameInput,  coordXInput,  coordYInput)
            
            fetch(postUrl, {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: city.toJson()
              })
              .then(response => response.json())
              .then(data => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            // Log that a call was made successfully
            props.logData.push({text:`Data sent to: ${postUrl}`,time: new Date().toLocaleString()})

            // setVal(!val)
            city.print();
            setNameInput('');
            setCoordXInput('');
            setCoordYInput('');
        }
    }
    
    function log() {
        const jsx = [];
        if (props.logData[0] != null) {
            props.logData.map( (jsxData,index) => {
                jsx.push(<Typography key={index}>{`${jsxData.text} at ${jsxData.time}`}</Typography>)
            })
            return jsx;
        }
        return (
            <Typography>No call yet.</Typography>
        )
    }

    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:5}, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Grid container direction="row" sx={{backgroundColor:"#222", minHeight:"70vh", borderRadius:{xs:0, lg:3}, p:3 }}>
                    <Grid container item xs={12} lg={9}>
                        <Grid container direction="column" item xs={12}>
                            <Grid item>
                                <Typography variant="span">Adicionar Cidade</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column"  item xs={12} sx={{p: {xs:2, lg:2}}}>
                            <FormControl component="form" sx={{height:"100%", width:"100%", display:"flex", justifyContent:'space-between'}} onSubmit={submitCity}>
                                <Grid item display='flex' flexDirection='column'> 
                                    <Grid item p={3} xs={12}>
                                            <TextField
                                                id="input-city-name"
                                                fullWidth
                                                error={errorInput.error && errorInput.component === 'name' ? errorInput.error : false}
                                                helperText={errorInput.component === 'name' ? errorInput.text : null}
                                                onChange={nameHandler}
                                                value={nameInput}
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
                                                id="input-city-coordinate-x"
                                                fullWidth
                                                error={errorInput.error && errorInput.component === 'xCoords' ? errorInput.error : false}
                                                helperText={errorInput.component === 'xCoords' ? errorInput.text : null}
                                                onChange={coordXHandler}
                                                value={coordXInput}
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
                                                    id="input-city-coordinate-y"
                                                    fullWidth
                                                    error={errorInput.error && errorInput.component === 'yCoords' ? errorInput.error : false}
                                                    helperText={errorInput.component === 'yCoords' ? errorInput.text : null}
                                                    onChange={coordYHandler}
                                                    value={coordYInput}
                                                    label="Coordenada Y"
                                                    placeholder="Digite a Coordenada Y"
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
import Button from '@mui/material/Button';

const RetractButton = () => {

    return(
        <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={index} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
            <Grid item>Cidade: {city.name}</Grid><Grid item> Coordenada X: {city.coordinate_x}</Grid><Grid item> Coordenada Y: {city.coordinate_y}</Grid><Grid item><Button >Delete</Button></Grid>
        </Grid> 
    )
}

export default RetractButton;
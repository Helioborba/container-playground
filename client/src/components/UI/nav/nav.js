import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
const Nav = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ['home','list']; // Used for the mapping of pages, you can also see that the Map will have a tenary for checking if its the / home

  // Open and close are for mobile view
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#222"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* This first area is the mobile screen side menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:'#bbdefb'}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                '& .MuiMenu-list': {backgroundColor: "#333"},
                '& .MuiMenu-paper': {backgroundColor: "#333"},
                display: { xs: 'block', md: 'none'}
              }}
            >
              {pages.map((page,index) => (
                <MenuItem component={NavLink} to={page === 'home' ? '/' : `/${page}`} key={index} onClick={handleCloseNavMenu} sx={{backgroundColor:"#333",p:2,"&.active": {color: "#bbdefb"}}}>
                  <Typography sx={{textTransform:'uppercase',textAlign:'center'}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* This is the desktop view */}
          <Box sx={{flexGrow: 1, justifyContent:'center', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <Box key={index}>
                <Button
                  component={NavLink}
                  to={page === 'home' ? '/' : `/${page}`} // Careful here, the logic is simple: If its the home return to it else create the path
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx:3, color:'#fff', display: 'block', "&.active": {color: "#bbdefb"}}}
                  >
                  {page}
                </Button>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
 import {AppBar,Toolbar,Typography, IconButton,Box} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'; 
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ImageFixed from "./imageFixed";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&:focus': { outline:`none`},
  },
  title: {
    flexGrow: 1,
  },
  list: {

    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  fullList: {
    width: 'auto',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const Header = ({ siteTitle, menuLinks }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Box  m={2} >
       
          
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
              <ImageFixed src="logo.png" /> 
              <Box component="span" display="block"  p={1} m={1} bgcolor="background.paper">
          {siteTitle}
          </Box>
              </div>
            </div>
          </div>
      </Box>
      <Divider />
      <List className="">
       
        {menuLinks.map(link => (
              
                <ListItem button key={link.name} style={{background: `whitesmoke`,width:`96%`}}  className="m-1 shadow-sm p-3 bg-white rounded">
                <Link style={{ textDecoration: "none" }} to={link.link}>
                    {link.name}
                  </Link>
              </ListItem>
              ))}
      </List>

    </div>
  );

    return (

    <div
      style={{
        paddingBottom: "3.7rem",
      }}
    >
      <AppBar position="fixed" style={{backgroundColor:`#663399`}}>
      <Toolbar>
        <div >
          <Box display={{ xs: 'block', md: 'none' }} m={1}>
            <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer('left', true)} color="inherit" aria-label="menu">
              <MenuIcon/>
            </IconButton>
          </Box>
          <Box display={{ xs: 'none',sm:'none', md: 'block' }} m={1}>
          <ImageFixed src="logo.png" /> 
          </Box>
        </div>
       
        <Typography variant="h6" className={classes.title} >
          {siteTitle}
        </Typography>
        <div >
          <Box display={{ xs: 'none',sm:'none', md: 'block' }} m={1}>
          {menuLinks.map(link => (
             
                <Box key={link.name} component="div" display="inline" p={1} m={1} style={{ color: `white`}}><Link style={{ color: `white`, textDecoration: "none" }} to={link.link}>
                {link.name}
              </Link>
              </Box>
              ))}

            
          </Box>
        </div>
       
      </Toolbar>
    </AppBar>
    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
    );
  
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header;
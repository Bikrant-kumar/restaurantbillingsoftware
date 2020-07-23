import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
             <AppBar position="static">
               <Toolbar>
                 <IconButton
                   edge="start"
                   className={classes.menuButton}
                   color="inherit"
                   aria-label="open drawer"
                 >
                   <MenuIcon />
                 </IconButton>
                 <Typography className={classes.title} variant="h6" noWrap>
                   RESTAURANT BILLING SOFTWARE
                 </Typography>
                  </Toolbar>
                 </AppBar>
          </div>
    )
}

Header.propTypes = {

}

export default Header
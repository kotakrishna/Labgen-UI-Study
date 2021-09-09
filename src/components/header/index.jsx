import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Divider,AppBar,Toolbar,Button, Drawer, IconButton, List, ListItem, ListItemIcon, useTheme } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { Switch } from '@material-ui/core';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import SecondSlider from '../SecondSilder';
import SwitchLogic from './switchLogic';
// import {logo} from "public/images/labgenlogo.png"

const drawerWidth = 200;



function TabPanel(props) {
    const { children, tabValue, index, ...other } = props;
  console.log(tabValue,index)
    return (
      <div
        role="tabpanel"
        hidden={tabValue !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {tabValue === index && (
            <Typography>{children}</Typography>
        )}
      </div>
    );
  }

const useStyles = makeStyles((theme) =>
  createStyles({
      root: {
          display: 'flex',
          flexGrow: 1,
        },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      insideTitle:{
        flexGrow: 1,
        display: 'flex',
        marginRight:"20px",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
      },
      menuButton: {
        marginRight: 16,
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: "100px",
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: "280px",
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
          border:"none",
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width:"30px",
        [theme.breakpoints.up('sm')]: {
          width: "60px",
        },
      },
      toolbar: {
        display: 'flex',
        height:"64px",
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        backgroundColor: theme.palette.primary.main,
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      secondSideBar:{
    position: "absolute",
    zIndex:"10",
    backgroundColor: "#F6F6F6",
    height: "100vh",
    width:"300px",
    marginLeft: "60px",
     transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    onOpen:{
        marginLeft: "280px",
        transition: theme.transitions.create('width', {
             easing: theme.transitions.easing.sharp,
             duration: theme.transitions.duration.leavingScreen,
           }),
           transition:" width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      }
  }),
);



function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

export default function Header({toggleDarkState,darkState}) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const [tabValue,setTabValue] = React.useState(0);

const handleTabChange=(value)=>{
    // console.log(event.target.value)
    setTabValue(value);
}
    const handleDrawerClose = () => {
      setOpen((prev)=>!prev);
    };
    return (
        <>
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ViewModuleIcon />
          </IconButton>
          <div className={clsx(classes.title)}>
          <img src="./images/labgenlogo.png" alt="" />
          </div>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Switch
        checked={darkState}
        onChange={toggleDarkState}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>


    
      <Drawer
       onMouseEnter={handleDrawerClose}
      onMouseLeave={handleDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div  className={classes.toolbar}>
          <IconButton>
          <div className={classes.insideTitle}>
          <img src="./images/labgenlogo.png" alt="" />
          </div>
            {/* {theme.direction === 'rtl' ? <ChevroRightIcon /> : <ChevronLeftIcon />} */}
            <ViewModuleIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabValue}
        onChange={handleTabChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
            <ListItem button onClick={(e)=>handleTabChange(0)} >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              {/* <Tab label="Requisitions" {...a11yProps(0)} /> */}
              <ListItemText primary="Requisitions"  />
            </ListItem>
            <ListItem button  onClick={(e)=>handleTabChange(1)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              {/* <Tab label="Result Inquiry" {...a11yProps(1)} /> */}
              <ListItemText primary="Result Inquiry"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(2)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Workstation"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(3)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Result Entry"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(4)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Verifiy/Approve Results"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(5)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Accounts Receivable/Billing"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(6)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Report Printing Menu"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(7)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Patient File Maintenance"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(8)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="System Dictionary"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(9)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Interface menu"/>
            </ListItem >
            <ListItem button  onClick={(e)=>handleTabChange(121)} >
              <ListItemIcon>
             <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="More Programs"/>
            </ListItem >
            </Tabs>
        </List>
        <Divider />
        <List>
          {['Settings', 'Profile', 'Audit'].map((text, index) => (
              <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
    <div  className={clsx(classes.secondSideBar,{[classes.onOpen]:open})}>
      {/* <SwitchLogic checkValue={1} />  */}
      <SwitchLogic  checkValue={tabValue} handleTabChange={handleTabChange} /> 
      </div>
      </>
    )
}

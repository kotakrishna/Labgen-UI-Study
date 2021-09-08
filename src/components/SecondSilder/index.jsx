import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

export default function SecondSlider() {
    return (
        <div>


             <List>
             <Link style={{ textDecoration: 'none',color:"black" }} to="/">
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Verifiy/Approve Results"/>
              </ListItem>
              </Link>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Verifiy/Approve Results"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Verifiy/Approve Results"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Verifiy/Approve Results"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Verifiy/Approve Results"/>
              </ListItem>
             </List>
        </div>
    )
}

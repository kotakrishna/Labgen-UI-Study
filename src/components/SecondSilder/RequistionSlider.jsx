import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom"

export default function RequistionSlider() {
    return (
        <div>
            <List>
                 <Link style={{ textDecoration: 'none',color:'black' }} to="/client-dictionary">
             <ListItem  button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText   primary="Add New Requistion"/>
              </ListItem>
                 </Link>
                 <Link style={{ textDecoration: 'none',color:"black" }} to="/">
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Request entry from remote orders"/>
              </ListItem>
                 </Link>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Fast Requistion Entry"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Modify Existing Requistion "/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Delete a Requistion"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="List of Requistion"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Log Menu"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Scan Received Sample"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Check for Missing Info"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="End of Day Processing"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="QC Order Entry"/>
              </ListItem>
         </List>
        </div>
    )
}

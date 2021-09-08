import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom"

export default function SystemDictionary() {
    return (
        <div>
             <List>
                 <Link style={{ textDecoration: 'none',color:'black' }} to="/client-dictionary">
             <ListItem  button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText   primary="Client Dictionary"/>
              </ListItem>
                 </Link>
                 <Link style={{ textDecoration: 'none',color:"black" }} to="/">
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Test Dictionary"/>
              </ListItem>
                 </Link>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Profile Dictionary"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Test/Profile comments"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Canned comments"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Reports Format File"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Worksheet setup"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Insurance Dictionary"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Laboratory Information"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Program Password File"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="User/Tech Password"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Automated billing tests"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Special Billing Translation"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Drug Test Billing tests"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Locations/Faclities Files"/>
              </ListItem>
             </List>
        </div>
    )
}

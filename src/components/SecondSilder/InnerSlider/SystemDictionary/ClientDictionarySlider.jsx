import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom"

export default function ClientDictionarySlider() {
    return (
        <div>
            <List>
                 <Link style={{ textDecoration: 'none',color:'black' }} to="/client-dictionary">
             <ListItem  button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText   primary="Add a new Record"/>
              </ListItem>
                 </Link>
                 <Link style={{ textDecoration: 'none',color:"black" }} to="/">
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Update a record"/>
              </ListItem>
                 </Link>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Read a record"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Print Sorted by Name"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Print Sorted by Number"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Print Sorted by Sales Group"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Clients w/ Activity for a Period"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Clients w/ Activity that location"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Print client's label"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Print client's prices"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Print client's special prices"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Add Client Provider"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Find Web Password"/>
              </ListItem>
             <ListItem button >
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Client Special profile List"/>
              </ListItem>
         </List>
        </div>
    )
}

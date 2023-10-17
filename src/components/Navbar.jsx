import { AppBar, Menu, MenuItem, Avatar, Box, Badge, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MemorySharpIcon from '@mui/icons-material/MemorySharp';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius
}))

const Icons = styled(Box)(({theme})=>({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs: "none", sm:"block"}}}>MEMORIES</Typography>
            <MemorySharpIcon sx={{display:{xs: "block", sm: "none"}}} />
            <Search><InputBase/></Search>
            <Icons>
            <Badge badgeContent={4} color="secondary">
               <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="error">
               <Notifications/>
            </Badge>
            <Avatar onClick={(e)=>setOpen(true)} sx={{width: 30, height: 30}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </Icons>
        <UserBox onClick={(e)=>setOpen(true)}>
        <Avatar sx={{width: 30, height: 30}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
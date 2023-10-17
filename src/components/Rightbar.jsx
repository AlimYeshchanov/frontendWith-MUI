import { Avatar, ListItem, AvatarGroup, Box, ImageList, ImageListItem, List, ListItemAvatar, ListItemText, Typography, Divider } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
    sx={{display: {xs: "none", sm: "block"}}}
    >
        <Box position="fixed" width={380}>
            <Typography variant='h5' fontWeight="100">Online Friends</Typography>
            <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/17267510/pexels-photo-17267510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/18518594/pexels-photo-18518594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/18505361/pexels-photo-18505361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/18176697/pexels-photo-18176697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/17267510/pexels-photo-17267510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/18518594/pexels-photo-18518594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/18505361/pexels-photo-18505361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/18176697/pexels-photo-18176697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/18176697/pexels-photo-18176697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </AvatarGroup>
        <Typography variant='h5' fontWeight="100" mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} gap={5} rowHeight={100}>
            <ImageListItem>
                <img
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                src="https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                src="https://images.pexels.com/photos/17593640/pexels-photo-17593640.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                src="https://images.pexels.com/photos/17180776/pexels-photo-17180776.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                />
            </ImageListItem>
        </ImageList>
        <Typography variant='h5' fontWeight="100" mt={2}>Latest Conservations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3541388/pexels-photo-3541388.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
    </Box>
  )
}

export default Rightbar
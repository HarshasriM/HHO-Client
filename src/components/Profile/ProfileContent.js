import React, { useContext } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import EventAvailableIcon from "@mui/icons-material/EventAvailable"; // Icon for adding events
import PersonIcon from "@mui/icons-material/Person"; // Avatar icon
import {AppContext} from "../../context/Context.js";
import './ProfileContent.css';
const ProfileContent = () => {
  const {userData} = useContext(AppContext);
  console.log(userData);
  return (
    <>
    {userData.name ?
      <Box sx={{ padding: "20px" }}>
        <Grid item xs={12} md={5}>
  
        <Grid item xs={12} md={7}>
          <Card
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "auto",
              display: "flex",
              width:"60vw",
              flexDirection: "column", // Center horizontally
            }}
            style={{width:{xs:"100%",md:"50%"},margin:"auto"}}
            className="profile-card-login"
          >
            <CardContent sx={{  padding: "25px" }}>
            <Typography
          variant="body1"
          sx={{
            color:"#fa9a34",
            fontWeight: "bold",
            
            fontFamily: '"Playpen Sans", cursive',
            fontSize: { xs: "15px", md: "30px" }, // Responsive font size
            marginBottom: { xs: "20px", md: "0px" }, // Add margin bottom for mobile
          }}
          style={{textAlign:"center"}}
          className="profile-detail"
        >
          Profile Details
        </Typography>
              <List>
              <Avatar
                sx={{
                  width: { xs: 80, md: 100 }, // Responsive avatar size
                  height: { xs: 80, md: 100 }, // Responsive avatar size
                  border: "3px solid white",
                  backgroundColor: "#fa9a34", // Optional: to make the avatar pop
                }}
                style={{margin:"auto"}}
              >
                {
                  userData.image ? <img src={`${userData.image}`} style={{width:"100%",height:"100%"}}/> :
                  <PersonIcon sx={{ fontSize: { xs: 20, md: 40 } }} />
                } 
              </Avatar>
                <ListItem sx={{display:"flex",justifyContent:"space-between"}}>
                 
                <Typography variant="h6" sx={{ color: "#111111" }}>
                     Name 
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#666" }}>
                     {userData.name}
                  </Typography>
                </ListItem>
                <hr style={{margin:"2px"}}/>
                <ListItem sx={{display:"flex",justifyContent:"space-between"}}>
                 
                <Typography variant="h6" sx={{ color: "#111111" }}>
                    Designation
                  </Typography>
                  <Typography variant="h6" sx={{ color: "666" }}>
                     {userData.role}
                  </Typography>
                </ListItem>
                <hr style={{margin:"2px"}}/>
                <ListItem sx={{display:"flex",justifyContent:"space-between"}}>
                 
                <Typography variant="h6" sx={{ color: "#111111" }}>
                     Email
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#666" }}>
                    {userData.email}
                  </Typography>
                </ListItem>
                <hr style={{margin:"2px"}}/>
                <ListItem sx={{display:"flex",justifyContent:"space-between"}}>
                 
                 <Typography variant="h6" sx={{ color: "#111111" }}>
                      Moblie
                   </Typography>
                   <Typography variant="h6" sx={{ color: "#666" }}>
                      {userData.mobile}
                   </Typography>
                 </ListItem>
                
                 
              
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box> :<div>Please login</div>
        }
        </>
  );
};

export default ProfileContent;

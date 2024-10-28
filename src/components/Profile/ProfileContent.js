import React from "react";
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

const ProfileContent = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {/* First Box: Name, Role, and Email (4 columns wide) */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "auto",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <CardContent
              sx={{
                textAlign: "left", // Align text to the left
                padding: "15px",
                display: "flex",
                flexDirection: "column", // Stack items vertically
                justifyContent: "center",
                alignItems:"center",
                gap:"10px",
                width: "100%", // Allow full width for alignment
              }}
            >
              {/* Avatar with icon moved to the left */}
            
            <Avatar
                sx={{
                  width: { xs: 80, md: 100 }, // Responsive avatar size
                  height: { xs: 80, md: 100 }, // Responsive avatar size
                  border: "3px solid white",
                  backgroundColor: "#fa9a34", // Optional: to make the avatar pop
                }}
              >
                <PersonIcon sx={{ fontSize: { xs: 20, md: 40 } }} /> {/* Responsive icon size */}
              </Avatar>
              <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                Boggula Bhargav Teja
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", marginBottom: "10px" }}>
                E3 CORE
              </Typography>
              <div class="d-flex justify-content-center  mb-2">
                <button  type="button" className="btn" style={{backgroundColor:"#fa9a34",color:'white'}}><EditIcon /> Edit Profile</button>
            </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Box: Description of what the user has done (8 columns wide) */}
        <Grid item xs={12} md={7}>
          <Card
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "auto",
              display: "flex",
              flexDirection: "column", // Center horizontally
            }}
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
        >
          Profile Details
        </Typography>
              <List>
                <ListItem sx={{display:"flex",justifyContent:"space-between"}}>
                 
                <Typography variant="h6" sx={{ color: "#111111" }}>
                     Name 
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#666" }}>
                     Boggula Bhargav Teja
                  </Typography>
                </ListItem>
                <hr style={{margin:"2px"}}/>
                <ListItem sx={{display:"flex",justifyContent:"space-between"}}>
                 
                <Typography variant="h6" sx={{ color: "#111111" }}>
                    Designation
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#666" }}>
                     E3 CORE
                  </Typography>
                </ListItem>
                <hr style={{margin:"2px"}}/>
                <ListItem sx={{display:"flex",justifyContent:"space-between"}}>
                 
                <Typography variant="h6" sx={{ color: "#111111" }}>
                     Email
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#666" }}>
                     core@gmail.com
                  </Typography>
                </ListItem>
                <hr style={{margin:"2px"}}/>
                <ListItem sx={{display:"flex",justifyContent:"space-between"}}>
                 
                 <Typography variant="h6" sx={{ color: "#111111" }}>
                      Moblie
                   </Typography>
                   <Typography variant="h6" sx={{ color: "#666" }}>
                      9345567890
                   </Typography>
                 </ListItem>
                
                 
              
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileContent;

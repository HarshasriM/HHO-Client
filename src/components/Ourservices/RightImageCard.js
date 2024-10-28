import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useMediaQuery } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HandshakeIcon from '@mui/icons-material/Handshake';
function RightImageCard({donation,isEvenRow}) {
    const isMobile = useMediaQuery('(max-width:800px)');
    return (
        <>
           <Grid item size={{ xs: 12, md: 6 }}>
                <Card sx={{display:isMobile?"block":"flex",height: isMobile ? "auto":"280px", boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                '&:hover': { boxShadow: '0px 6px 16px orange' },}}>
                <CardActionArea>
                    <CardMedia
                         component="img"
                         height="280"
                         image={donation.image}
                         alt="green iguana"
                         sx={{
                            borderRadius:isMobile ? 
                            "10px":isEvenRow ? "0% 100% 0% 0%" : "0% 0% 100% 0%",
                            transition:"0.5s",
                            "&:hover":{
                                borderRadius:"0% 0% 0% 0%",
                            }
                         }}
                         
                         />       
                    </CardActionArea>   
                    <CardActionArea>
                        <CardContent >
                                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"'Playpen Sans', cursive"}}>
                                    {donation.title}
                                </Typography>
                                <Typography gutterBottom variant="body" component="div">
                                  <span style={{color:"#fa9a34"}}><b>Donated to :</b> </span>  {donation.name}
                                </Typography>
                                <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary',fontFamily:"'Playpen Sans', cursive" }}>
                                    {donation.description}
                                </Typography>
                                <div style={{display:"flex",justifyContent:isMobile?"space-evenly":"space-between",marginTop:"10px",fontFamily:"'Playpen Sans', cursive"}}>
                                    <Typography gutterBottom variant="h6" component="div" sx={{padding:"6px 6px 6px 6px" , border:"1px solid #fa9a34",borderRadius:"15px"}}>
                                        <HandshakeIcon sx={{fontSize:isMobile? "20px":"25px",color:"#fa9a34"}}/>
                                    &nbsp;<span style={{fontSize:"14px"}}>{donation.amt}/-</span>
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div" sx={{padding:"6px 6px 6px 6px" , border:"1px solid #fa9a34",borderRadius:"15px"}}>
                                        <CalendarMonthIcon sx={{fontSize:isMobile? "20px":"25px",color:"#fa9a34"}}/>
                                    &nbsp;<span style={{fontSize:"14px"}}>{donation.date}</span>
                                    </Typography>
                                </div>
                               
                                
                        </CardContent>
                    </CardActionArea>
                    
                </Card>
            </Grid> 
        </>
    );
}

export default RightImageCard;
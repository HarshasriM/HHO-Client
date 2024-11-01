import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import EditWindow from "./EditWindow";
import DeleteWindow from "./DeleteWindow";
const AllActivities = () => {
  const [activities, setActivities] = useState();
  const [selected, setSelected] = useState();
  const [editWindow, setEditWindow] = useState(false);
  const [deleteWindow, setDeleteWindow] = useState(false);
  const handleClose = (type) => {
    type === "edit" ? setEditWindow(false) : setDeleteWindow(false);
    axios
      .get("http://localhost:8000/api/activities/getAll")
      .then((res) => {
        console.log(res.data.data);
        setActivities(res.data.data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/activities/getAll")
      .then((res) => {
        console.log(res.data.data);
        setActivities(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h2>All Activities</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {activities &&
          activities.map((activity) => {
            return (
              <Card
                sx={{
                  maxWidth: 800,
                  mx: "auto",
                  boxShadow: 3,
                  borderRadius: 2,
                }}
                style={{ width: "30vw" }}>
                <CardMedia
                  component="img"
                  height="140"
                  width="340"
                  image={activity.image}
                  alt={activity.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {activity.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activity.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      setSelected(activity);
                      setEditWindow(true);
                    }}>
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => {
                      setSelected(activity);
                      setDeleteWindow(true);
                    }}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </div>
      {editWindow && <EditWindow activity={selected} handleClose={handleClose}/>}
      {deleteWindow && <DeleteWindow activity={selected} handleClose={handleClose}/>}
    </div>
  );
};

export default AllActivities;

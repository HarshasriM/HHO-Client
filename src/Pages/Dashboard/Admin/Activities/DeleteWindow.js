import React, { useContext, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import { AppContext } from "../../../../context/Context";
const DeleteConfirmationDialog = ({ handleClose, activity }) => {
  const {setAlertMsg,setOpen,setMsgType} = useContext(AppContext);
  return (
    <Dialog
      open={true}
      onClose={() => {
        handleClose("delete");
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">Delete Confirmation</DialogTitle>
      <DialogContent>
        <Typography id="alert-dialog-description">
          Are you sure you want to delete this item?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose("delete")} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            axios
              .delete(
                `http://localhost:8000/api/activities/delete/${activity._id}`
              )
              .then((res) => {
                if(res.status === 200){
                setAlertMsg("Activity Deleted..");
                setMsgType("danger");
                setOpen(true);
                handleClose("delete");
                }
              })
              .catch((e) => console.log(e));
          }}
          color="error"
          autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteConfirmationDialog;

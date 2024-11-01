import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { AppContext } from "../../../../context/Context";
import { useContext } from "react";
import axios from "axios";

const DeleteWindow = ({ testimonial, handleClose }) => {
  const { setOpen, setAlertMsg, setMsgType,msgType } = useContext(AppContext);

  const handleConfirm = () => {
    axios
      .delete(
        `http://localhost:8000/api/testimonial/deleteTestimonial/${testimonial._id}`
      )
      .then((res) => {
        setMsgType("warning");
        setAlertMsg("Testimonial deleted...");
        setOpen(true);
        handleClose("delete");
      })
      .catch((e) => console.log(e));
  };
  return (
    <Dialog open={true} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you want to delete this testimonial?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="error" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteWindow;

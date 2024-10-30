import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import { AppContext } from "../../../../context/Context";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const EditUserDialog = ({ onClose, user }) => {
  const {alertMsg,setAlertMsg,setOpen,setMsgType} = useContext(AppContext);

  const [formData, setFormData] = useState({
    image: user?.image || "",
    name: user?.name || "",
    email: user?.email || "",
    password: user?.password || "",
    role: user?.role || "",
    ID: user?.ID || "",
    mobile: user?.mobile || "",
    linkedin: user?.linkedin || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async () => {
    let imageUrl = formData.image;
  
    // Upload the image only if it's a file object
    if (formData.image instanceof File) {
      const uploadData = new FormData();
      uploadData.append("file", formData.image);
      uploadData.append("upload_preset", "unsigned_upload");
  
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dkzzeiqhh/image/upload",
          uploadData
        );
        imageUrl = response.data.secure_url;
      } catch (e) {
        console.error("Image upload failed:", e);
        return;
      }
    }
  
    const updatedData = {
      ...formData,
      image: imageUrl,
    };
  
    try {
      const response = await axios.put(
        `http://localhost:8000/api/users/offUsers/updateUsers/${user._id}`,
        updatedData
      );
      console.log(response.data);
      if(response.data.message === "success"){
        setAlertMsg("Updated Successfully");
        setMsgType("success");
        setOpen(true);
      }
    } catch (e) {
      console.error("User update failed:", e);
    }
  };
  

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: file });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    await onSubmit();
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Edit User
        <IconButton
          onClick={onClose}
          style={{ position: "absolute", right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Avatar src={formData.image} sx={{ width: 80, height: 80, mb: 2 }} />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="upload-button"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="upload-button">
            <Button
              component="span"
              startIcon={<CloudUploadIcon />}
              variant="outlined">
              Upload Image
            </Button>
          </label>
        </Box>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="role"
          label="Role"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.role}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="ID"
          label="ID"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.ID}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="mobile"
          label="Mobile"
          type="tel"
          fullWidth
          variant="outlined"
          value={formData.mobile}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="linkedin"
          label="LinkedIn"
          type="url"
          fullWidth
          variant="outlined"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserDialog;

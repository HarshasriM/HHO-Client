import React, { useContext, useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import DonationCard from "./DonationCard";
import axios from "axios";
import { AppContext } from "../../../context/Context";

const AllDonations = () => {
  const { token, setAlertMsg, setErrorOcc, setOpen,apiUrl } = useContext(AppContext);
  const [donations, setDonations] = useState([]);
  const [editLoading, setEditLoading] = useState({});
  const [deleteLoading, setDeleteLoading] = useState({});
  const[execute,setExecute] = useState(false);

  const uploadImageToCloudinary = async (previousphoto) => {
    const uploadData = new FormData();
    uploadData.append("file", previousphoto);
    uploadData.append("upload_preset", "unsigned_upload");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dkzzeiqhh/image/upload",
        uploadData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

 

  const handleEdit = async (editDonation, id) => {
    setEditLoading((prev) => ({ ...prev, [id]: true })); // Start loading for this donation
    console.log("Edit donation with ID:", id);
    console.log(editDonation);

    try {
      if (editDonation.photo instanceof File) {
        const uploadedPhotoUrl = await uploadImageToCloudinary(editDonation.photo);
        if (!uploadedPhotoUrl) {
          setAlertMsg("Error uploading image.");
          setErrorOcc(true);
          setOpen(true);
          setEditLoading((prev) => ({ ...prev, [id]: false })); // Stop loading
          return;
        }
        editDonation = {
          ...editDonation,
          photo: uploadedPhotoUrl, // Replace photo with the Cloudinary URL
        };
      }

      await axios.put(`${apiUrl}/api/donations/update/${id}`, editDonation, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setAlertMsg("Updated Successfully");
      setErrorOcc(false);
      setOpen(true);
    } catch (error) {
      console.error("Error while updating:", error.message);
      setAlertMsg("Error while Updating..");
      setErrorOcc(true);
      setOpen(true);
    } finally {
      setEditLoading((prev) => ({ ...prev, [id]: false })); // Stop loading
    }
    setExecute(!execute);
  };

  const handleDelete = async (id) => {
    setDeleteLoading((prev) => ({ ...prev, [id]: true })); // Start loading for this donation
    console.log("Delete donation with ID:", id);

    try {
      console.log(`${apiUrl}/api/donations/delete/${id}`);
      await axios.delete(`${apiUrl}/api/donations/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setAlertMsg("Deleted Successfully");
      setErrorOcc(false);
      setOpen(true);
      setDonations((prev) => prev.filter((donation) => donation._id !== id)); // Update the UI
    } catch (error) {
      console.log(error);
      console.error("Error while deleting:", error.message);
      setAlertMsg("Error while Deleting..");
      setErrorOcc(true);
      setOpen(true);
    } finally {
      setDeleteLoading((prev) => ({ ...prev, [id]: false })); // Stop loading
    }
    setExecute(!execute);
  };

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/donations/getall`);
        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, [execute]);

  return (
    <Box
    sx={{
      padding: 2,
      maxWidth: "100%",
      margin: "0 auto",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        padding: 4,
        maxWidth: "1200px",
        margin: "0 auto",
        height:'auto',
        textAlign:'center',
        color:'orange'
      }}
    >
      Donation Lists
    </Typography>
      <br />
    <Grid 
      container 
      spacing={3} 
      justifyContent="center" // Center grid items horizontally
      alignItems="flex-start" // Align items from the top
    >
      {donations.map((donation) => (
        <Grid 
          item 
          xs={12} // Full width on extra-small screens
          sm={6}  // Half width on small screens (2 cards per row)
          md={4}  // 3 cards per row on medium screens
          key={donation._id}
        >
          <DonationCard
            donation={donation}
            onEdit={handleEdit}
            onDelete={handleDelete}
            editLoading={editLoading[donation._id] || false}
            deleteLoading={deleteLoading[donation._id] || false}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
  
  );
};

export default AllDonations;

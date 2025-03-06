"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditonalReq from "./_components/AdditonalReq";
import { Button } from "@/components/ui/button";
import { storage } from "@/config/firebaseConfig";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

function CreateNew() {
  const [formData, setFormData] = useState({ image: null });
  const [clerkError, setClerkError] = useState(null);

  const onHandleInputChange = (value, fieldName) => {
    if (!value) return;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  // Clerk API Error Handling
  useEffect(() => {
    const checkClerkStatus = async () => {
      try {
        const res = await fetch(
          "https://ethical-troll-31.clerk.accounts.dev/v1/environment"
        );
        if (!res.ok) throw new Error("Clerk API is down.");
      } catch (err) {
        setClerkError("Clerk authentication is down. Please try again later.");
      }
    };
    checkClerkStatus();
  }, []);

  const SaveRawImageToFirebase = async () => {
    try {
      if (!(formData.image instanceof File)) {
        console.error("Invalid file! Please upload a valid image.");
        return null;
      }

      const fileName = `${Date.now()}_raw.png`;
      const imageRef = ref(storage, `/room-redesign/${fileName}`);

      await uploadBytes(imageRef, formData.image);
      console.log("File successfully uploaded...");

      const downloadURL = await getDownloadURL(imageRef);
      console.log("Download URL:", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file to Firebase:", error);
      return null;
    }
  };

  const GenerateAiImage = async () => {
    try {
      if (!formData.image) {
        console.error("No image selected! Please upload an image before generating.");
        return;
      }

      const rawImageURL = await SaveRawImageToFirebase();
      if (!rawImageURL) {
        console.error("Image upload failed. Cannot generate AI image.");
        return;
      }

      const updatedFormData = { ...formData, imageUrl: rawImageURL };

      const result = await axios.post("/api/redesign-room", updatedFormData);
      console.log("AI-generated room design:", result.data);
    } catch (error) {
      console.error("Error generating AI image:", error);
    }
  };

  return (
    <div>
      {clerkError && <p className="text-red-500 text-center mb-4">{clerkError}</p>}

      <h2 className="font-bold text-3xl text-primary text-center">
        Experience the Magic of AI Remodeling
      </h2>
      <p className="text-center text-gray-400">
        Transform any room with a click. Select a space, choose a style, and watch as AI instantly
        reimagines your environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <ImageSelection onChange={(file) => onHandleInputChange(file, "image")} />

        <div>
          <RoomType selectedRoomType={(value) => onHandleInputChange(value, "roomType")} />
          <DesignType onChange={(value) => onHandleInputChange(value, "designType")} />
          <AdditonalReq onChange={(value) => onHandleInputChange(value, "additionalReq")} />

          <Button className="w-full mt-5" onClick={GenerateAiImage}>
            Generate
          </Button>
          <p className="text-sm text-gray-400 mb-52">
            NOTE: 1 Credit will be used to redesign your room.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;

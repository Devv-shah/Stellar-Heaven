"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function ImageSelection({ onChange }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onFileSelected = (event) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    // Ensure onChange is a function before calling it
    if (typeof onChange === "function") {
      onChange(selectedFile);
    } else {
      console.error("onChange is not a function. Received:", onChange);
    }
  };

  // Generate and clean up object URL for preview
  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="w-full px-4">
      <label className="text-gray-600">Select an Image of Your Room</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`w-full max-w-md h-64 md:h-80 border rounded-xl border-dotted flex justify-center items-center border-primary
                bg-slate-200 cursor-pointer hover:shadow-lg transition-all duration-300 
                ${file ? "p-0 bg-black" : ""}`}
          >
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Image src="/searchimg.png" alt="upload" width={70} height={70} />
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          className="hidden"
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
}

export default ImageSelection;

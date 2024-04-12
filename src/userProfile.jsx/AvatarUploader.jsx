import React, { useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(localStorage.getItem("avatar") || "");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result;
      localStorage.setItem("avatar", imageUrl);
      setImage(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Change Avatar</h3>
      <input
        type="file"
        onChange={handleUpload}
        accept="image/*"
        className="border border-gray-300 rounded-md p-2"
      />
      {image && (
        <img
          src={image}
          alt="Avatar"
          className="mt-2 rounded-full w-20 h-20 object-cover"
        />
      )}
    </div>
  );
};

export default ImageUploader;

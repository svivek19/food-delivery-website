import React, { useRef, useState } from "react";
import compressAndStoreImage from "./compressAndStoreImage";
import { FaUserEdit } from "react-icons/fa";

const ImageUploader = () => {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(
    localStorage.getItem("avatar") ||
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
  );

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const imageUrl = await compressAndStoreImage(file, 1024);
    if (imageUrl) {
      setImage(imageUrl);
    }
  };

  const handledel = () => {
    localStorage.removeItem("avatar");
    setImage(
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
    );
  };

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="mt-4">
      <input
        type="file"
        onChange={handleUpload}
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
      />
      <FaUserEdit
        className="text-gray-500 cursor-pointer"
        size={24}
        onClick={handleEditClick}
      />
      <button className="hidden" onClick={handleEditClick} />
      <button
        className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={handledel}
      >
        Delete
      </button>
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

import React, { useRef, useState } from "react";
import compressAndStoreImage from "./compressAndStoreImage";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
    <div className="mt-4 md:w-4/6 w-11/12 mx-auto flex justify-center bg-[#ececec] rounded-t-3xl p-4">
      <div>
        <div>
          {image && (
            <img
              src={image}
              alt="Avatar"
              className="mt-2 rounded-full w-28 h-28 object-cover"
            />
          )}
        </div>
        <div>
          <div>
            <input
              type="file"
              onChange={handleUpload}
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
            />
          </div>

          <div className="flex justify-center space-x-2 my-3">
            <div>
              <FaUserEdit
                className="text-gray-500 my-1 text-5xl cursor-pointer hover:text-[#52321b] transition-all"
                size={24}
                onClick={handleEditClick}
              />
              <button className="hidden" onClick={handleEditClick} />
            </div>

            <div>
              <MdDeleteForever
                className="text-gray-500 hover:text-[#52321b] transition-all text-3xl cursor-pointer"
                onClick={handledel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;

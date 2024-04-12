import { compress } from "image-conversion";

const compressAndStoreImage = async (file, maxSizeKB) => {
  try {
    if (file.size > maxSizeKB * 1024) {
      const compressedImage = await compress(file, {
        maxSizeMB: maxSizeKB / 1024,
      });
      const imageUrl = URL.createObjectURL(compressedImage);
      localStorage.setItem("avatar", imageUrl);
      return imageUrl;
    } else {
      const imageUrl = URL.createObjectURL(file);
      localStorage.setItem("avatar", imageUrl);
      return imageUrl;
    }
  } catch (error) {
    console.error("Error compressing and storing image:", error);
    return null;
  }
};

export default compressAndStoreImage;

import axios from "axios";

export const uploadImage = async (formData: FormData) => {
  const url = `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_cloudId
  }/image/upload?upload_preset=neqfirer`;

  const imageUrl = await axios
    .post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_cloudId
      }/image/upload`,
      formData
    )
    .then((res) => res.data.url)
    .catch((err) => ({ uploadError: err }));

  return imageUrl;
};

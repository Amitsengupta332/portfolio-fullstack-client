export const imageHosting = async (image: any) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${"28f6fe261cdc8382a3e51277359feb0d"}`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const imageData = await response.json();

    return imageData.data.display_url;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

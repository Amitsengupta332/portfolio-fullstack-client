import { FieldValues } from "react-hook-form";

export const createBlogs = async (data: FieldValues) => {
  try {
    const res = await fetch(`http://localhost:5000/api/blog/createBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    return await res.json();
  } catch (error) {
    console.error("Error during Post Blog:", error);
    throw error;
  }
};

import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: "/blog/createBlog",
        method: "POST",
        body: JSON.stringify(data), // Ensure data is serialized to JSON
        headers: {
          "Content-Type": "application/json", // Ensure headers are set
        },
      }),
      invalidatesTags: ["blog"],
    }),
    getAllBlog: build.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateBlogMutation, useGetAllBlogQuery } = blogApi;

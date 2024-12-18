"use client";
import Postcard from "@/Component/Postcard";
import {useGetPostsQuery} from "@/redux/api/baseApi";
import React from "react";

const Page = () => {
     const {data: posts, isLoading, isError, error} = useGetPostsQuery();

     if (isLoading) return <div>Loading...</div>;

     if (isError) return <div>Error: {error.message}</div>;

     if (!posts) return <div>No posts found.</div>;

     // Render the posts

     return (
          <div className=" grid grid-cols-4 gap-10 p-10 border">
               {posts?.map((post) => (
                    <Postcard key={post.id} post={post}  />
               ))}
          </div>
     );
};

export default Page;

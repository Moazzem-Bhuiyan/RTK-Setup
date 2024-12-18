"use client";

import {useGetPostQuery} from "@/redux/api/baseApi";
import Image from "next/image";
import {useParams} from "next/navigation";
import React from "react";

const Page = () => {
     const {id} = useParams(); // Fetch the dynamic route parameter
     const {data: post, isLoading, isError, error} = useGetPostQuery(id); // Call the API with the ID

     // Handle loading state
     if (isLoading) return <p>Loading...</p>;

     // Handle error state
     if (isError)
          return (
               <p>Error: {error?.data?.message || "Something went wrong!"}</p>
          );

     return (
          <div>
               <h1>Post Details</h1>
               {post ? (
                    <div>
                         <h2>{post.title}</h2>

                         <p>Album ID: {post.albumId}</p>
                    </div>
               ) : (
                    <p>Post not found!</p>
               )}
          </div>
     );
};

export default Page;

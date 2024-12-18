import Link from "next/link";
import React from "react";

const Postcard = ({post}) => {
     const {id} = post;

     return (
          <Link href={`/PostDetails/${id}`}>
               <div className=" p-10 border ">
                    <h1>{post.title}</h1>
               </div>
          </Link>
     );
};

export default Postcard;

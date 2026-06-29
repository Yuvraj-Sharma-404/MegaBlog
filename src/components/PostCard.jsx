import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import BlogImage from "./BlogImage";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-slate-300 rounded-xl p-4 aspect-video hover:bg-slate-400 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:scale-[1.02] ">
        <div className="w-full justify-center mb-4">
          <BlogImage
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;

import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { Query } from "appwrite";
import { useSelector } from "react-redux";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const fetchPosts = async () => {
      const activePosts = await appwriteService.getPosts();
      let allPosts = activePosts ? activePosts.documents : [];

      if (userData) {
        const myInactivePosts = await appwriteService.getPosts([
          Query.equal("status", "inactive"),
          Query.equal("userId", userData.$id),
        ]);
        if (myInactivePosts) {
          allPosts = [...allPosts, ...myInactivePosts.documents];
        }
      }

      setPosts(allPosts);
    };

    fetchPosts();
  }, [userData]);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;

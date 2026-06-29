import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import Loader from "../components/Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await appwriteService.getPosts();

      if (posts) {
        setPosts(posts.documents);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    if (loading) {
      return (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      );
    }
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-slate-400 text-[#2a2312]">
                Login to read posts...
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
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

export default Home;

/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { getByPost } from "@/services/postService";

export default async function HomePage() {
  const { data: blogs } = await getByPost();

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto my-5">
        {
          blogs.map((blog: any) => (<BlogCard key={blog.id} post={blog} />))
        }
      </div>
    </div>
  );
};

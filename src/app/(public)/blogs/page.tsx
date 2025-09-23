/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import { getByPost } from "@/services/postService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'All Blog | Next Blog',
  description: "A simple blog built with Next.js, Tailwind CSS, and shadcn/ui.",
}

const AllBlogsPage = async () => {
  const { data: blogs } = await getByPost();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto my-5">
        {
          blogs.map((blog: any) => (<BlogCard key={blog.id} post={blog} />))
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;

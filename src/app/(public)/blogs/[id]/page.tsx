/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
    const { data: blogs } = await res.json();
    return blogs.slice(0, 2).map((blog: any) => ({ id: String(blog.id) }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`);
    const data = await res.json();

    return {
        title: data?.title
    }
};

const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`);
    const data = await res.json();

    return (
        <div>
            <BlogDetailsCard blog={data} />
        </div>
    );
};

export default BlogDetails;
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';

const BlogDetails = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
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
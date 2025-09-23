export const getByPostId = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`);
    return await res.json();
};

export const getByPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
        cache: "no-store",
        next: {
            tags: ["BLOGS"],
        },
    });
    
    return await res.json();
};
"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
    const blogInfo = Object.fromEntries(data.entries());
    const { title, content, thumbnail, tags, isFeatured } = blogInfo;

    const modifiedData = {
        title: title?.toString(),
        content: content?.toString(),
        thumbnail: thumbnail?.toString(),
        authorId: 2,
        tags: tags ? tags.toString().split(",").map((tag) => tag.trim()) : [],
        isFeatured: Boolean(isFeatured)
    };
    // console.log(modifiedData)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(modifiedData)
    });

    const result = await res.json();
    if (result?.id) {
        revalidateTag("BLOGS")
        revalidatePath("/blogs")
        redirect("/blogs")
    };

    return result;
};
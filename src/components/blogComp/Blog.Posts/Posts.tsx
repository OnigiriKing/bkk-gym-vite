import { blogPost } from "utils/data/blogData";
import allSvg from "svg/allSvg";

export default function Posts() {
  return (
    <div className="flex flex-col gap-[2.5rem] w-[90%]">
      {Object.keys(blogPost).map((el) => {
        const post = blogPost[el];
        return (
          <div className="flex flex-col gap-[1rem]">
            <div className="h-[25rem]">
              <img className="h-full object-cover w-full" alt="img" src={post.img}></img>
            </div>
            <p className="text-gray-600 flex items-center gap-[.2rem]">
              <i className="text-red-600 mr-[.1rem]">{allSvg(20).post}</i> By
              <b>{post.author}</b> | {post.date} | {post.type}
            </p>
            <h3 className="text-3xl font-bold">{post.name}</h3>
            <p className="text-gray-600">{post.des}</p>
            <button className="button-class mt-[1rem]">
              PURCHASE NOW {allSvg(20).arrow}
            </button>
          </div>
        );
      })}
    </div>
  );
}

import { blogPost } from "utils/data/blogData";

export default function Recent() {
  return (
    <div className="bg-gray-100 p-[2rem] ">
      <h3 className="mb-[1rem] contact-page-header text-[1.2rem]">Recent Posts</h3>
      <div className="flex flex-wrap gap-[.5rem] ">
        {Object.keys(blogPost).map((el) => {
          const post = blogPost[el];
          return (
            <div className="h-[8rem] flex items-center gap-[1rem]">
              <div className="w-[10rem] cursor-pointer">
                <img src={post.img} alt="img"></img>
              </div>
              <div className="flex flex-col gap-[.5rem] h-full w-full justify-center">
                <p className="text-gray-600">{post.date}</p>
                <h3 className="cursor-pointer hover:text-red-600 duration-[.4s]  font-bold">
                  {post.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

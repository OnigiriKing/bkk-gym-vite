import redBrush from "utils/img/redBrush.png";
import Article from "./News.Article";
import { blogPost } from "utils/data/blogData";

export default function News() {
  const random = Math.floor(Math.random() * 4) + 3;
  return (
    <div className="flex justify-center items-center  bg-white text-black  my-6">
      <div className="flex flex-col common-wrapper items-center gap-8 text-center py-[4rem]">
        <div className="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p className="z-[6] font-bold text-white">LATEST BLOG</p>
          <img className="absolute -top-[1rem]  z-[5] " alt="img"  src={redBrush} />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-3">Our Recent News</h3>
          <p className="text-gray-600 w-[70%] text-center mb-2">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(blogPost)
            .slice(random - 3, random)
            .map((key) => {
              const obj = blogPost[key];
              return <Article date={obj.date} name={obj.name} des={obj.des} />;
            })}
        </div>
      </div>
    </div>
  );
}

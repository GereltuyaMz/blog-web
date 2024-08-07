import React from "react";
import Link from "next/link";

const Card = ({ article }) => {
  return (
    <Link href={"/blog/" + article.id}>
      <div className="border p-4 gap-4 rounded-[16px] w-[396px]">
        <div className="">
          <img
            src={article.social_image ? article.social_image : "/default.avif"}
            className="rounded-[6px] w-full"
          />
        </div>
        <div className="">
          <span className="text-[#4B6BFB] bg-[#4B6BFB]/5 px-[10px] py-1 block rounded-[6px] mt-2">
            {article?.type_of}
          </span>
          <h2 className="text-2xl font-semibold truncate">{article.title}</h2>
          <div className="flex items-center gap-2 ">
            <img
              src={article.user.profile_image}
              className="w-[36px] h-[36px] rounded-full"
            />
            <p className="text-[#97989F] text-4">{article.user.name}</p>
            <p className="text-[#97989F] text-4">{article.published_at}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

// import React, { useEffect } from "react";

const handelDate = (date) => {
  const pubTime = new Date(date);
  const currTime = new Date();
  const diff = currTime.getTime() - pubTime.getTime();
  if (diff < (1000*60)) return "Just Now";
  if (diff < (1000*60*60)) return Math.floor(diff/(1000*60)) + "m ago";
  if (diff < (1000*60*60*24)) return Math.floor(diff/(1000*60*60)) + "h ago";
  if (diff < (1000*60*60*24*7)) return Math.floor(diff/(1000*60*60*24)) + "d ago";
  return pubTime.toDateString();
}
const handelImgUrl = (url,text) => {
  if (url === null) {
    return "https://dummyimage.com/320x256/c2c2c2/494952.png&text=News+Feed";
  }
  return url;
};

const handelAuthor = (author) => {
  if (author === null) {
    return "Unknown";
  }
  if(Array.isArray(author)) return handelAuthor(author[0]);
  return author;
}

function NewsCard({data}) {
// useEffect(()=>{},[])
console.log(data)
  return (
    <div className=" text-white z-20 w-80  mx-auto my-2 p-3 border border-slate-700 bg-slate-800  rounded-lg">
      
      <a href={data.link} target="_blank" rel="noreferrer">
        <div>
          <img
            src={handelImgUrl(data.image_url)}
            alt={data.title}
            className=" w-80 h-64  object-cover rounded-lg"
          />
        </div>
        <div className="py-2 " >
          <h2 className="max-h-20 text-xl/6 font-semibold text-wrap break-words truncate hover:text-clip ">{data.title}</h2>
          <p className=" text-gray-200 text-sm/5 font-normal h-16 text-wrap text-justify break-words truncate ">{data.description}</p>
        </div>
          <div className="flex text-xs items-center justify-between">
            <div className=" text-mirage-400">{handelDate(data?.pubDate)}</div>
            <div className=" text-slate-500">{`Author ${handelAuthor(data.creator)}`}</div>
          </div>
      </a>
    </div>
  );
}

export default NewsCard;

import React from "react";
import Link from "next/link";
import Image from "next/image";
const Projectitem = ({ imagesrc, technology, demo, nam }) => {
  return (
    <>
      <div className="relative object-contain flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 border border-gray-600 rounded-xl group hover:bg-gradient-to-r from-[#006a91] to-[#00D8FF]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={imagesrc}
          alt={nam}
          width={700}
          height={600}
          // loading='lazy'
          priority={true}
          quality={1}
        />
        <div className="hidden text-center group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {nam}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{technology}</p>

          <Link href={demo} target="_blank">
            <button className="rounded-lg px-5 py-3 bg-cyan-900 text-gray-200 font-bold text-lg cursor-pointer">
              Demo
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default  Projectitem;

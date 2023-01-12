import React from "react";
import Projectitem from "../components/Projectitem";
import { Assets } from "../components/Assets";
import Head from "next/head";
const Projects = () => {

  
  return (
    <>
    <Head>
    <link
      rel="shortcut icon"
      href="https://res.cloudinary.com/dbwc39val/image/upload/v1670838133/myportfolio/favicon_rnizwp.ico"
    />
    <title>PROJECT</title>
  </Head>
  <div className=" bg-black top-[50px] sm:top-[80px] relative  w-full min-h-screen text-white py-16 px-4 sm:px-16 ">
      <div className="flex flex-col  space-y-10">
        <h1 className="text-[30px] md:text-[40px] border-b-2 text-[#006a91] bold">PROJECTS</h1>
        <h2 className="text-[25px] md:text-[35px] text-[#00D8FF] font-semibold">
          What I Have Done
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* start from here */}
          <Projectitem
            nam={Assets.projects.weather.name}
            imagesrc={Assets.projects.weather.imagesrc}
            technology={Assets.projects.weather.technology}
            demo={Assets.projects.weather.demo}
          />
          <Projectitem
            nam={Assets.projects.defi.name}
            imagesrc={Assets.projects.defi.imagesrc}
            technology={Assets.projects.defi.technology}
            demo={Assets.projects.defi.demo}
          />
          <Projectitem
            nam={Assets.projects.beach.name}
            imagesrc={Assets.projects.beach.imagesrc}
            technology={Assets.projects.beach.technology}
            demo={Assets.projects.beach.demo}
          />
          <Projectitem
            nam={Assets.projects.news.name}
            imagesrc={Assets.projects.news.imagesrc}
            technology={Assets.projects.news.technology}
            demo={Assets.projects.news.demo}
          />
          <Projectitem
            nam={Assets.projects.Breakingbad.name}
            imagesrc={Assets.projects.Breakingbad.imagesrc}
            technology={Assets.projects.Breakingbad.technology}
            demo={Assets.projects.Breakingbad.demo}
          />
          <Projectitem
            nam={Assets.projects.crypto.name}
            imagesrc={Assets.projects.crypto.imagesrc}
            technology={Assets.projects.crypto.technology}
            demo={Assets.projects.crypto.demo}
          />
          <Projectitem
            nam={Assets.projects.clock.name}
            imagesrc={Assets.projects.clock.imagesrc}
            technology={Assets.projects.clock.technology}
            demo={Assets.projects.clock.demo}
          />
          <Projectitem
            nam={Assets.projects.drum.name}
            imagesrc={Assets.projects.drum.imagesrc}
            technology={Assets.projects.drum.technology}
            demo={Assets.projects.drum.demo}
          />
          <Projectitem
            nam={Assets.projects.typeahead.name}
            imagesrc={Assets.projects.typeahead.imagesrc}
            technology={Assets.projects.typeahead.technology}
            demo={Assets.projects.typeahead.demo}
          />

          {/* ends here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;

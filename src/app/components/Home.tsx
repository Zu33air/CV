import Link from "next/link";
import React from "react";
import About from "../About/page";
import skills from "../Skills/page";
import contactPage from "../Contact/page";
import experiencePage from "../Expereince/page";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdLocationPin, MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
function Home() {
  const para = "Ali heights Flat B-018 Sparco rd";
  const para2 = "Scheme 33 Gulazar Hijri Karachi Sindhi Pakistan";

  return (
    <>
      <div>
        {/* Navigation Bar */}
        <div
          className="flex justify-center gap-[70px] max-w-[1000px]  mx-auto sticky top-0 text-white mt-8 
         "
        >
          <Link href={"/"} className="hover:text-zinc-500">
            Home
          </Link>
          <Link href={"./About"} className="hover:text-zinc-500">
            About
          </Link>
          <Link href={"./Skills"} className="hover:text-zinc-500">
            Skills
          </Link>
          <Link href={"./Expereince"} className="hover:text-zinc-500">
            Experence
          </Link>
          <Link href={"./Contact"} className="hover:text-zinc-500">
            Contact
          </Link>
        </div>
        <div className="flex ">
          <div className="text-white flex px-5 flex-col   max-w-fit mt-24 mx-[170px]">
            <h4 className="bg-green-500  rounded px-6 max-w-[120px] mt-2 hover:bg-green-600 ">
              Hello I'm
            </h4>
            <h1 className="font-bold text-4xl mt-4 font-autograph">
              Zubair Ahmad
            </h1>
            <h3 className="font-semibold text-xl">Design Stratgist</h3>
            <div className="flex items-center  gap-2 mt-12 text-start">
              <AiOutlineMail /> <p className="text-start">zu33air@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 mt-2 text-start">
              <AiOutlinePhone />
              <p className="text-start">92-316-597-3484</p>
            </div>
            <div className="flex items-center mt-2 gap-2 text-start">
              <MdLocationPin />
              <p />
              {para}
              <br />
              {para2}
              <p />
            </div>
            <div className="flex  items-center px-3 m-6 gap-8">
              <MdFacebook />
              <BsTwitter />
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
          </div>
          <div className="mt-[140px] border border-x-[12px] border-x-amber-100  border-y-[12px]  rounded-full  w-[250px] h-[250px]  ">
            <img src={"/me.jpg"} alt="profile" className="rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex  mt-[150px] mx-[174px] mb-6">
        <div className="text-white">
          <Image
            src={"/2.webp"}
            alt="aboutus"
            width={1200}
            height={1200}
            className="rounded"
          />
        </div>
        <div className="text-white mx-4">
          <h3 className="font-bold">About me</h3>
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            doloremque ratione exercitationem provident eum labore quibusdam
            inventore qui.
          </p>
          <section className="flex justify-evenly mt-5">
            <Link
              href={"/"}
              className="border border-lime-500 px-2 rounded-sm mx-2 hover:border-zinc-500"
            >
              Php
            </Link>
            <Link
              href={"/"}
              className="border border-lime-500 px-2 mx-2 rounded-md hover:border-zinc-500"
            >
              Javascript
            </Link>
            <Link
              href={"/"}
              className="border border-lime-500 px-2 mx-2 rounded-md hover:border-zinc-500"
            >
              Python
            </Link>
            <Link
              href={"/"}
              className="border border-lime-500 px-2 mx-2 rounded-md hover:border-zinc-500"
            >
              NextJs
            </Link>
            <Link
              href={"/"}
              className="border border-lime-500 px-2 mx-2 rounded-md hover:border-zinc-500"
            >
              React
            </Link>
            <Link
              href={"/"}
              className="border border-lime-500 px-2 mx-2 rounded-md hover:border-zinc-500"
            >
              Github
            </Link>
          </section>
          <div className="p-2 mt-6 max-w-fit">
            <Link
              href={"/"}
              className="bg-green-600 text-white py-1 px-4 rounded-md hover:bg-green-900 "
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

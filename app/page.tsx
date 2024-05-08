"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@nextui-org/card";
import { CardHeader } from "@nextui-org/card";
import { CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Code } from "@nextui-org/code";
import { SearchIcon } from "@/components/icons";
import TagInput from "@/components/TagInput";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import axios from "axios";
import { Chip } from "@nextui-org/chip";
import Slideshow from "@/components/autoslide";
import Link from "next/link";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/GetPost")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const filteredPosts = posts
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="flex w-full h-full ">
        <Card className="w-1/4 flex  rounded-xl border-gray-500 bg-blend-normal border-2 h-full flex-col items-center rounded-r-none">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "w-128 h-14 bg-white border-2 border-gray-800",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
            className="w-4/5 mt-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Card className="box-anim m-4 h-14 w-2/3 p-2 flex flex-col flex-wrap justify-center items-center mt-12 cursor-pointer">
            <Link
              href="/blog"
              className="  justify-center items-center text-xl font-extralight h-full  w-full flex"
            >
              CATEGORY
            </Link>
          </Card>

          <Card className=" h-56 w-3/4 mt-24">
            <Slideshow />
          </Card>
        </Card>
        <div className="w-3/4 flex flex-wrap  border-gray-500 border-2 border-l-0 justify-center  max-h-full rounded-xl rounded-l-none ">
          {isLoading && (
            <div className="flex items-center justify-center">
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
          )}
          {filteredPosts &&
            filteredPosts.map((post) => (
              <Card key={post.id} className="Post m-11">
                <CardHeader className="flex">
                  <div className="flex w-1/2 justify-start items-center">
                    <Avatar text={post.by.charAt(0).toUpperCase()} />
                    <h2 className="font-bold text-xl ml-4">{post.title}</h2>
                  </div>
                  <div className="flex w-1/2 justify-end">
                    <Chip
                      variant="shadow"
                      classNames={{
                        base: "bg-gradient-to-br from-red-500 to-red-400 border-small border-white/50 shadow-red-500/20 m-2 w-1/2 h-12",
                        content: "drop-shadow shadow-black  ",
                      }}
                    >
                      {/* className="m-2 w-1/2 h-12 items-center justify-center  border-gray-500 border-2 rounded-xl" */}
                      {post.tag}
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="CardBody">
                  <p className=" overflow-y-auto flex flex-warp">
                    {post.content}
                  </p>
                </CardBody>

                <p className="pb-4 pl-4 text-sm text-gray-500 flex justify-end pr-4">
                  Posted by {post.by}
                </p>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}

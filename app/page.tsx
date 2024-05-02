"use client";
import React, { useState } from "react";
import { Card } from "@nextui-org/card";
import { CardHeader } from "@nextui-org/card";
import { CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Code } from "@nextui-org/code";
import { SearchIcon } from "@/components/icons";
import TagInput from "@/components/TagInput";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const mockPosts = [
    {
      id: 1,
      title: "Post 1",
      content: "This is the post 1.",
      username: "User1",
      tag: ["funny"],
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the post 2.",
      username: "User2",
      tag: ["math"],
    },
    {
      id: 2,
      title: "Post 3",
      content: "This is the post 3.",
      username: "User3",
      tag: ["game", "football"],
    },
    {
      id: 3,
      title: "Post 4",
      content: "This is the post 4.",
      username: "User4",
      tag: ["football", "game", "funny"],
    },
    {
      id: 4,
      title: "Post 5",
      content: "This is the post 5.",
      username: "User5",
      tag: ["funny"],
    },
    {
      id: 5,
      title: "Post 6",
      content: "This is the post 6.",
      username: "User6",
      tag: ["game"],
    },

    // Add more posts as needed
  ];

  const filteredPosts = mockPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
 

  //const [selected, setSelected] = useState([]);

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
          
          <Card className="box-anim m-4 h-1/6 w-2/3 p-2 flex flex-col flex-wrap">
            <TagInput />
          </Card>
        </Card>
        <div className="w-3/4 flex flex-wrap  border-gray-500 border-2 border-l-0 justify-center  max-h-full rounded-xl rounded-l-none ">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="Post m-11">
              <CardHeader>
                <Avatar text={post.username.charAt(0).toUpperCase()} />
                <h2 className="font-bold text-xl ml-4">{post.title}</h2>
              </CardHeader>
              <CardBody>
                <p className=" overflow-y-auto">{post.content}</p>
              </CardBody>
              <Card className="m-2 w-1/2 h-12  flex flex-row">
                {post.tag.map((tags , index) => (
                  <Card className=" w-1/4 h-2/3 m-2 justify-center items-center border-gray-500 border-2 rounded-xl " key={index}>
                    {tags}
                  </Card>
                ))}
              </Card>

              <p className="pb-4 pl-4 text-sm text-gray-500">
                Posted by {post.username}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

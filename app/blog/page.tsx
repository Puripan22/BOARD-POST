"use client"
import React, { useState } from "react";
import { Card } from "@nextui-org/card";
import { CardHeader } from "@nextui-org/card";
import { CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Code } from "@nextui-org/code";
import { SearchIcon } from "@/components/icons";

export default function YourPosts() {
  const [searchTerm, setSearchTerm] = useState("");
  const mockPosts = [
    { id: 1, title: 'Post 1', content: 'This is the post 1.', username: 'User1' },
    { id: 2, title: 'Post 2', content: 'This is the post 2.', username: 'User2' },
    { id: 2, title: 'Post 2', content: 'This is the post 2.', username: 'User2' },
    { id: 2, title: 'Post 2', content: 'This is the post 2.', username: 'User2' },
    { id: 2, title: 'Post 2', content: 'This is the post 2.', username: 'User2' },
    { id: 2, title: 'Post 2', content: 'This is the post 2.', username: 'User2' },

    
    // Add more posts as needed
  ];

  const filteredPosts = mockPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="flex w-full h-full ">
        <Code className="w-1/4 flex  rounded-xl border-gray-500 bg-blend-normal border-2 h-full flex-col items-center rounded-r-none">
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
          <Button radius="full" className="h-12 w-36 mt-4 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
            What in your mind
          </Button>
        </Code>
        <div className="w-3/4 flex flex-wrap  border-gray-500 border-2 border-l-0 justify-center  max-h-full rounded-xl rounded-l-none ">
          {filteredPosts.map(post => (
            <Card key={post.id} className="Post m-4 ">
              <CardHeader>
                <Avatar text={post.username.charAt(0).toUpperCase()} />
                <h2 className="font-bold text-xl ml-4">{post.title}</h2>
              </CardHeader>
              <CardBody>
                <p className=" overflow-y-auto">{post.content}</p>
              </CardBody>
              <p className="pb-4 pl-4 text-sm text-gray-500">Posted by {post.username}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles, user } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Card } from "@nextui-org/card";
import TagInput from "@/components/TagInput";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

export default function FormPage() {
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newTag = event.currentTarget.value.trim();
      if (newTag) {
        setTags([...tags, newTag]);
        event.currentTarget.value = "";
      }
    }
  };

  const handleDelete = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };
  const [title_, setTitle] = useState("");
  const [tag_, setTag] = useState("");
  const [content_, setContent] = useState("");
  const [user_, setUser] = useState("");
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUser(username);
    }
  }, []);
  const SubmitPost = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/create_b", {
        title_,
        tag_,
        content_,
        user_,
      });

      Swal.fire({
        icon: "success",
        title: "add Post Success",
        text: "You have successfully add Post!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.href = "/blog";
      });
    } catch (error) {
      console.error("Signup error:", error);
      Swal.fire({
        icon: "error",
        title: "add Post Error",
        text: "An error occurred while add Post. Please try again later.",
      });
    }
  };
  return (
    <div className="h-full w-full justify-center items-center flex flex-col border-gray-400 border-2 rounded-xl">
      <Card className=" box-anim  w-2/5 flex border-gray-500 bg-blend-normal border-2 h-5/6 flex-col items-center rounded-xl ">
        <div className="flex flex-col w-full h-1/4 pt-8 items-center">
          <label htmlFor="title" className="text-5xl">
            Title
          </label>
          <Input
            name="title"
            type="text"
            placeholder="Title of the post"
            className="w-2/3 h-full pt-4"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col  w-full h-1/3  items-center pt-6">
          <label htmlFor="content" className="text-5xl">
            Content
          </label>
          <Textarea
            className="h-full w-2/3  pt-4 "
            name="content"
            placeholder="Content of the post"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <label htmlFor="content" className="text-4xl pt-8">
          Tag
        </label>
        <Card className="  h-20 w-96 mt-5 p-2 flex flex-wrap justify-center">
          {tags.map((tag) => (
            <Tag
              key={tag}
              size=" md"
              borderRadius="full"
              variant="solid"
              colorScheme="teal"
              className="TagLabel  flex justify-center"
            >
              <TagLabel className="">{tag}</TagLabel>
              <TagCloseButton
                className="TagCloseButton"
                onClick={() => handleDelete(tag)}
              />
            </Tag>
          ))}
          <Input
            placeholder="tags"
            onKeyDown={handleKeyDown}
            className=""
            onChange={(e) => setTag(e.target.value)}
          />
        </Card>
        <div className="flex w-full h-1/3  pt-10 justify-center ">
          <Button type="submit" className="w-1/5 h-14 " onClick={SubmitPost}>
            Add Post
          </Button>
        </div>
      </Card>
    </div>
  );
}
